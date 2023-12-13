const puppeteer = require('puppeteer');

describe('E2E Good Books', ()=>{
    let browser
    let page
    beforeAll(async() => {
        browser= await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });
        page = await browser.newPage()
        await page.goto('https://adorable-piroshki-cc3799.netlify.app', {waitUntil:'load'})
        
    },500000)
    afterAll(async()=>{

        await browser.close()
    
    },500000)
    test('Happy path!', async()=>{
        
        //buscar por nombre
        await page.type('input[type=search]','He');
        await page.waitForTimeout(500); 
        //filtrar por genero
        await page.select('#types','1')
        await page.waitForTimeout(500); 
        //filtrar por anio
        await page.type('input[type=number]','1965')
        await page.waitForTimeout(500); 
        await page.keyboard.press('Enter');
        
        //abrir modal
        await page.waitForSelector('#root > div > main > section.w-full.md\\:w-3\\/5.h-72.md\\:h-96.mb-4.mt-4.flex.items-center.overflow-x-auto.mr-12.px-4.bg-secondary > article');
        await page.click('#root > div > main > section.w-full.md\\:w-3\\/5.h-72.md\\:h-96.mb-4.mt-4.flex.items-center.overflow-x-auto.mr-12.px-4.bg-secondary > article');
        await page.waitForTimeout(500); 
        const title = await getText(page,'#root > div > aside > div > div > div:nth-child(2) > h2')
        expect(title).toBe('Dune')

        // cerrar modal
        await page.click('#root > div > aside > div > div.mt-2.w-full.h-auto.flex.justify-end > svg');
        await page.waitForTimeout(500); 

        //agregar a fav
        page.click('main > section > article > button ')
        await page.waitForTimeout(500); 

        //revisar si se guardo en favoritos
        const list = await getText(page,'#root > div > section > div ')
        const totalList = list.includes('1')
        expect(totalList).toBe(true)
 
    })
})