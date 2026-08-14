import puppeteer from 'puppeteer';

const BASE_URL = 'http://localhost:8080';

const PAGES = [
  { path: '/', name: 'Accueil' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'À propos' },
  { path: '/auth', name: 'Authentification' },
  { path: '/admin-login', name: 'Admin Login' },
  { path: '/dashboard', name: 'Dashboard' },
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeSlowly(page, selector, text, delay = 80) {
  await page.focus(selector);
  for (const char of text) {
    await page.keyboard.type(char);
    await sleep(delay);
  }
}

async function moveMouse(page, x, y) {
  await page.mouse.move(x, y, { steps: 20 });
  await sleep(300);
}

(async () => {
  console.log('\n🚀 Lancement de Chrome...\n');

  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: { width: 1440, height: 900 },
    args: ['--start-maximized'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const report = [];

  for (const { path, name } of PAGES) {
    const url = BASE_URL + path;
    console.log(`\n📄 [${name}] → ${url}`);

    try {
      const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 });
      await sleep(1500);

      const status = response ? response.status() : 'N/A';
      const title = await page.title();

      // Déplacement de souris visible
      await moveMouse(page, 400, 300);
      await moveMouse(page, 720, 450);

      // Scroll doux vers le bas
      await page.evaluate(() => {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      });
      await sleep(1000);
      await page.evaluate(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      await sleep(800);

      // Cherche des inputs sur la page
      const inputs = await page.$$('input');
      let filledForms = false;

      if (inputs.length > 0) {
        console.log(`  📝 ${inputs.length} champ(s) trouvé(s), remplissage...`);

        const emailInput = await page.$('input[type="email"], input[name="email"], input[placeholder*="mail" i]');
        const passwordInput = await page.$('input[type="password"]');

        if (emailInput) {
          const box = await emailInput.boundingBox();
          if (box) await moveMouse(page, box.x + box.width / 2, box.y + box.height / 2);
          await typeSlowly(page, 'input[type="email"], input[name="email"]', 'admin@microsnet.com');
          await sleep(500);
          filledForms = true;
        }

        if (passwordInput) {
          const box = await passwordInput.boundingBox();
          if (box) await moveMouse(page, box.x + box.width / 2, box.y + box.height / 2);
          await page.focus('input[type="password"]');
          for (const char of 'Admin1234!') {
            await page.keyboard.type(char);
            await sleep(80);
          }
          await sleep(500);
          filledForms = true;
        }
      }

      // Cherche les liens du menu
      const navLinks = await page.$$eval('nav a, header a', links =>
        links.map(l => ({ text: l.textContent.trim(), href: l.href })).filter(l => l.text)
      );

      const result = {
        page: name,
        url,
        status,
        title,
        navLinks: navLinks.slice(0, 10),
        inputsFound: inputs.length,
        filledForms,
      };

      report.push(result);

      console.log(`  ✅ Status: ${status} | Titre: "${title}"`);
      if (navLinks.length > 0) {
        console.log(`  🔗 Liens nav: ${navLinks.map(l => l.text).join(', ')}`);
      }
      if (filledForms) {
        console.log(`  📝 Formulaire rempli avec les identifiants de test`);
      }

      await sleep(2000);

    } catch (err) {
      console.log(`  ❌ Erreur: ${err.message}`);
      report.push({ page: name, url, error: err.message });
    }
  }

  // Rapport final
  console.log('\n\n═══════════════════════════════════════════');
  console.log('📊 RAPPORT FINAL');
  console.log('═══════════════════════════════════════════\n');

  for (const r of report) {
    if (r.error) {
      console.log(`❌ ${r.page} (${r.url})\n   Erreur: ${r.error}\n`);
    } else {
      console.log(`✅ ${r.page} (${r.url})`);
      console.log(`   Status: ${r.status} | Titre: "${r.title}"`);
      if (r.inputsFound > 0) console.log(`   Formulaires: ${r.inputsFound} champ(s)`);
      console.log('');
    }
  }

  console.log('\n✔️  Vérification terminée ! Le navigateur reste ouvert 30s...');
  await sleep(30000);
  await browser.close();
})();
