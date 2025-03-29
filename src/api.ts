// TurkishDictionaryAPI.ts
import {
    TurkishDialect,
    PersonNameType,
    PersonNameSearchType,
    ScienceArtDict,
} from "./types.js";

export class TurkishDictionaryAPI {
    private baseUrl: string = "https://sozluk.gov.tr";

    private async makeRequest<T>(
        endpoint: string,
        searchTerm: string,
        params: Record<string, string> = {}
    ): Promise<T> {
        let url = `${this.baseUrl}${endpoint}${encodeURIComponent(searchTerm)}`;

        const urlParams = new URLSearchParams(params).toString();
        if (urlParams) {
            url += (url.includes("?") ? "&" : "?") + urlParams;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`API error: ${response.status}`);
            return (await response.json()) as T;
        } catch (error) {
            console.error("Request error:", error);
            throw error;
        }
    }

    // Main dictionary
    public async searchWord(word: string) {
        return this.makeRequest("/gts?ara=", word);
    }

    // Western-origin words
    public async searchWesternOrigin(word: string) {
        return this.makeRequest("/bati?ara=", word);
    }

    // Scanning dictionary
    public async searchScanning(word: string) {
        return this.makeRequest("/tarama?ara=", word);
    }

    // Compilation dictionary
    public async searchCompilation(word: string) {
        return this.makeRequest("/derleme?ara=", word);
    }

    // Proverbs and idioms
    public async searchProverbsAndIdioms(word: string) {
        return this.makeRequest("/atasozu?ara=", word);
    }

    // Foreign words guide
    public async searchForeignWordsGuide(word: string) {
        return this.makeRequest("/kilavuz?prm=ysk&ara=", word);
    }

    // Eren Etymology Dictionary
    public async searchErenEtymology(word: string) {
        return this.makeRequest("/etms?ara=", word);
    }

    // Origin Information Dictionary
    public async searchOriginInfo(word: string) {
        return this.makeRequest("/etimoloji?ara=", word);
    }

    // Turkish Sign Language
    public async searchSignLanguage(word: string) {
        return this.makeRequest("/tid?ara=", word);
    }

    // Person Names Dictionary
    public async searchPersonNames(
        term: string,
        type: PersonNameType,
        searchType: PersonNameSearchType
    ) {
        const endpoint =
            searchType === PersonNameSearchType.BY_NAME
                ? `/adlar?gore=1&cins=${type}&ara=`
                : `/adlar?gore=2&cins=${type}&ara=`;

        return this.makeRequest(endpoint, term);
    }

    // Simplified versions of person name searches
    public async searchMaleNames(name: string) {
        return this.searchPersonNames(
            name,
            PersonNameType.MALE,
            PersonNameSearchType.BY_NAME
        );
    }

    public async searchFemaleNames(name: string) {
        return this.searchPersonNames(
            name,
            PersonNameType.FEMALE,
            PersonNameSearchType.BY_NAME
        );
    }

    public async searchUnisexNames(name: string) {
        return this.searchPersonNames(
            name,
            PersonNameType.UNISEX,
            PersonNameSearchType.BY_NAME
        );
    }

    public async searchByNameMeaning(meaning: string, type: PersonNameType) {
        return this.searchPersonNames(
            meaning,
            type,
            PersonNameSearchType.BY_MEANING
        );
    }

    // Turkish Dialects Dictionary
    public async searchDialects(
        word: string,
        dialect: TurkishDialect = TurkishDialect.AZERBAIJANI
    ) {
        return this.makeRequest("/lehceler?ara=", word, {
            lehce: dialect.toString(),
        });
    }

    // Science and Art Terminology Dictionary
    public async searchScienceArt(
        word: string,
        dictionary: ScienceArtDict = ScienceArtDict.ALL
    ) {
        let endpoint = "/terim?eser_ad=tümü&ara=";

        // Special cases for some dictionaries
        if (dictionary === ScienceArtDict.NURSING) {
            return this.makeRequest("/hemsirelik?ara=", word);
        } else if (dictionary === ScienceArtDict.VETERINARY) {
            return this.makeRequest("/veterinerlik?ara=", word);
        } else if (
            dictionary === ScienceArtDict.LOGIC ||
            dictionary === ScienceArtDict.METROLOGY
        ) {
            // These might have special endpoints too
            endpoint = "/terim?eser_ad=tümü&ara=";
        }

        return this.makeRequest(endpoint, word);
    }

    // Simplified methods for common science dictionaries
    public async searchNursing(word: string) {
        return this.searchScienceArt(word, ScienceArtDict.NURSING);
    }

    public async searchPharmacy(word: string) {
        return this.searchScienceArt(word, ScienceArtDict.PHARMACY);
    }

    public async searchMetrology(word: string) {
        return this.searchScienceArt(word, ScienceArtDict.METROLOGY);
    }

    public async searchVeterinary(word: string) {
        return this.searchScienceArt(word, ScienceArtDict.VETERINARY);
    }

    // Search all terminology
    public async searchAllTerminology(word: string) {
        return this.searchScienceArt(word, ScienceArtDict.ALL);
    }
}
