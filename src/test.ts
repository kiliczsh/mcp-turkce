// test.ts
import { TurkishDictionaryAPI } from './api.js';
import { PersonNameSearchType, PersonNameType, ScienceArtDict, TurkishDialect } from './types.js';

async function testMainDictionaries() {
    console.log('===== MAIN DICTIONARIES =====');
    const api = new TurkishDictionaryAPI();

    // Main Turkish dictionary (GTS)
    console.log('Searching Turkish Dictionary (GTS) for "adalet"...');
    const gts = await api.searchWord('adalet');
    if (gts && typeof gts === 'object' && 'error' in gts) {
        console.log('Turkish Dictionary (GTS) error:', gts.error);
        throw new Error('Turkish Dictionary (GTS) error: adalet');
    }

    // Western-origin words
    console.log('Searching Western-origin words for "telefon"...');
    const western = await api.searchWesternOrigin('telefon');
    if (western && typeof western === 'object' && 'error' in western) {
        console.log('Western-origin words error:', western.error);
        throw new Error(`Western-origin words error: telefon`);
    }
    console.log('Western-origin words result:', western);

    // Scanning dictionary
    console.log('Searching Scanning dictionary for "yürek"...');
    const scanning = await api.searchScanning('yürek');
    if (scanning && typeof scanning === 'object' && 'error' in scanning) {
        console.log('Scanning dictionary error:', scanning.error);
        throw new Error(`Scanning dictionary error: yürek`);
    }
    console.log('Scanning dictionary result:', scanning);

    // Compilation dictionary
    console.log('Searching Compilation dictionary for "aş"...');
    const compilation = await api.searchCompilation('aş');
    if (compilation && typeof compilation === 'object' && 'error' in compilation) {
        console.log('Compilation dictionary error:', compilation.error);
        throw new Error(`Compilation dictionary error: aş`);
    }
    console.log('Compilation dictionary result:', compilation);
}

async function testSpecializedDictionaries() {
    console.log('\n===== SPECIALIZED DICTIONARIES =====');
    const api = new TurkishDictionaryAPI();

    // Proverbs and idioms
    console.log('Searching Proverbs and idioms for "göz"...');
    const proverbs = await api.searchProverbsAndIdioms('göz');
    if (proverbs && typeof proverbs === 'object' && 'error' in proverbs) {
        console.log('Proverbs and idioms error:', proverbs.error);
        throw new Error(`Proverbs and idioms error: göz`);
    }
    console.log('Proverbs and idioms result:', proverbs);

    // Foreign words guide
    console.log('Searching Foreign words guide for "software"...');
    const foreign = await api.searchForeignWordsGuide('software');
    if (foreign && typeof foreign === 'object' && 'error' in foreign) {
        console.log('Foreign words guide error:', foreign.error);
        throw new Error(`Foreign words guide error: software`);
    }
    console.log('Foreign words guide result:', foreign);

    // Eren Etymology Dictionary
    console.log('Searching Eren Etymology Dictionary for "yürek"...');
    const etymology = await api.searchErenEtymology('yürek');
    if (etymology && typeof etymology === 'object' && 'error' in etymology) {
        console.log('Eren Etymology error:', etymology.error);
        throw new Error(`Eren Etymology error: yürek`);
    }
    console.log('Eren Etymology result:', etymology);

    // Origin Information Dictionary
    console.log('Searching Origin Information Dictionary for "para"...');
    const origin = await api.searchOriginInfo('para');
    if (origin && typeof origin === 'object' && 'error' in origin) {
        console.log('Origin Information error:', origin.error);
        throw new Error(`Origin Information error: para`);
    }
    console.log('Origin Information result:', origin);

    // Turkish Sign Language
    console.log('Searching Turkish Sign Language for "selam"...');
    //const sign = await api.searchSignLanguage('selam');
    //if (sign && typeof sign === 'object' && 'error' in sign) {
    //    console.log('Sign Language error:', sign.error);
    //    throw new Error(`Sign Language error: selam`);
    //}
    //console.log('Sign Language result:', sign);
}

async function testPersonNameDictionaries() {
    console.log('\n===== PERSON NAME DICTIONARIES =====');
    const api = new TurkishDictionaryAPI();

    // Male names
    console.log('Searching Male names for "ahmet"...');
    const male = await api.searchMaleNames('ahmet');
    if (male && typeof male === 'object' && 'error' in male) {
        console.log('Male names error:', male.error);
        throw new Error(`Male names error: ahmet`);
    }
    console.log('Male names result:', male);

    // Female names
    console.log('Searching Female names for "ayşe"...');
    const female = await api.searchFemaleNames('ayşe');
    if (female && typeof female === 'object' && 'error' in female) {
        console.log('Female names error:', female.error);
        throw new Error(`Female names error: ayşe`);
    }
    console.log('Female names result:', female);

    // Unisex names
    console.log('Searching Unisex names for "deniz"...');
    const unisex = await api.searchUnisexNames('deniz');
    if (unisex && typeof unisex === 'object' && 'error' in unisex) {
        console.log('Unisex names error:', unisex.error);
        throw new Error(`Unisex names error: deniz`);
    }
    console.log('Unisex names result:', unisex);

    // Search by name meaning
    console.log('Searching by name meaning "güzel" for female names...');
    const meaning = await api.searchByNameMeaning('güzel', PersonNameType.FEMALE);
    if (meaning && typeof meaning === 'object' && 'error' in meaning) {
        console.log('Name meaning search error:', meaning.error);
        throw new Error(`Name meaning search error: güzel`);
    }
    console.log('Name meaning search result:', meaning);

    // Custom person name search
    console.log('Performing custom person name search for "can" (male)...');
    const custom = await api.searchPersonNames('can', PersonNameType.MALE, PersonNameSearchType.BY_NAME);
    if (custom && typeof custom === 'object' && 'error' in custom) {
        console.log('Custom person name search error:', custom.error);
        throw new Error(`Custom person name search error: can`);
    }
    console.log('Custom person name search:', custom);
}

async function testDialectDictionaries() {
    console.log('\n===== DIALECT DICTIONARIES =====');
    const api = new TurkishDictionaryAPI();

    // Default dialect (Azerbaijani)
    console.log('Searching default dialect for "alma"...');
    const default_dialect = await api.searchDialects('alma');
    if (default_dialect && typeof default_dialect === 'object' && 'error' in default_dialect) {
        console.log('Default dialect error:', default_dialect.error);
        throw new Error(`Default dialect error: alma`);
    }
    console.log('Default dialect result:', default_dialect);

    // Specific dialects
    console.log('Searching Azerbaijani dialect for "alma"...');
    const azeri = await api.searchDialects('alma', TurkishDialect.AZERBAIJANI);
    if (azeri && typeof azeri === 'object' && 'error' in azeri) {
        console.log('Azerbaijani dialect error:', azeri.error);
        throw new Error(`Azerbaijani dialect error: alma`);
    }
    console.log('Azerbaijani dialect result:', azeri);

    console.log('Searching Bashkir dialect for "alma"...');
    const bashkir = await api.searchDialects('alma', TurkishDialect.BASHKIR);
    if (bashkir && typeof bashkir === 'object' && 'error' in bashkir) {
        console.log('Bashkir dialect error:', bashkir.error);
        throw new Error(`Bashkir dialect error: alma`);
    }
    console.log('Bashkir dialect result:', bashkir);

    console.log('Searching Kazakh dialect for "dil"...');
    const kazakh = await api.searchDialects('dil', TurkishDialect.KAZAKH);
    if (kazakh && typeof kazakh === 'object' && 'error' in kazakh) {
        console.log('Kazakh dialect error:', kazakh.error);
        throw new Error(`Kazakh dialect error: dil`);
    }
    console.log('Kazakh dialect result:', kazakh);
}

async function testScienceArtDictionaries() {
    console.log('\n===== SCIENCE & ART DICTIONARIES =====');
    const api = new TurkishDictionaryAPI();

    // All terminology
    console.log('Searching all terminology for "sözlük"...');
    const all = await api.searchAllTerminology('sözlük');
    console.log(all);
    if (all && typeof all === 'object' && 'error' in all) {
        console.log('All terminology error:', all.error);
        throw new Error(`All terminology error: sözlük`);
    }
    console.log('All terminology result:', all);

    // Medicine dictionary
    console.log('Searching Medicine dictionary for "yürek"...');
    const medicine = await api.searchScienceArt('yürek', ScienceArtDict.MEDICINE);
    if (medicine && typeof medicine === 'object' && 'error' in medicine) {
        console.log('Medicine dictionary error:', medicine.error);
        throw new Error(`Medicine dictionary error: yürek`);
    }
    console.log('Medicine dictionary result:', medicine);

    // Biology dictionary
    console.log('Searching Biology dictionary for "hücre"...');
    const biology = await api.searchScienceArt('hücre', ScienceArtDict.BIOLOGY);
    if (biology && typeof biology === 'object' && 'error' in biology) {
        console.log('Biology dictionary error:', biology.error);
        throw new Error(`Biology dictionary error: hücre`);
    }
    console.log('Biology dictionary result:', biology);

    // Simplified methods
    console.log('Searching Nursing dictionary for "ateş"...');
    const nursing = await api.searchNursing('ateş');
    if (nursing && typeof nursing === 'object' && 'error' in nursing) {
        console.log('Nursing dictionary error:', nursing.error);
        throw new Error(`Nursing dictionary error: ateş`);
    }
    console.log('Nursing dictionary result:', nursing);

    console.log('Searching Pharmacy dictionary for "ilaç"...');
    const pharmacy = await api.searchPharmacy('ilaç');
    if (pharmacy && typeof pharmacy === 'object' && 'error' in pharmacy) {
        console.log('Pharmacy dictionary error:', pharmacy.error);
        throw new Error(`Pharmacy dictionary error: ilaç`);
    }
    console.log('Pharmacy dictionary result:', pharmacy);

    console.log('Searching Metrology dictionary for "ölçüm"...');
    const metrology = await api.searchMetrology('ölçüm');
    if (metrology && typeof metrology === 'object' && 'error' in metrology) {
        console.log('Metrology dictionary error:', metrology.error);
        throw new Error(`Metrology dictionary error: ölçüm`);
    }
    console.log('Metrology dictionary result:', metrology);

    console.log('Searching Veterinary dictionary for "aşı"...');
    const veterinary = await api.searchVeterinary('aşı');
    if (veterinary && typeof veterinary === 'object' && 'error' in veterinary) {
        console.log('Veterinary dictionary error:', veterinary.error);
        throw new Error(`Veterinary dictionary error: aşı`);
    }
    console.log('Veterinary dictionary result:', veterinary);
}

async function runTest() {
    try {
        console.log('Starting Turkish Dictionary API Test...\n');

        await testMainDictionaries();
        await testSpecializedDictionaries();
        await testPersonNameDictionaries();
        await testDialectDictionaries();
        await testScienceArtDictionaries();

        console.log('\nTest completed successfully!');
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in test:', error.message);
        } else {
            console.error('Error in test:', String(error));
        }
    }
}

runTest();