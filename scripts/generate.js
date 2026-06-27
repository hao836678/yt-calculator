const fs = require('fs');

const template = fs.readFileSync('./templates/country-template.html', 'utf8');
const countries = JSON.parse(
  fs.readFileSync('./data/countries.json', 'utf8')
);

countries.forEach(country => {
  let html = template;

  html = html.replaceAll('{{country}}', country.country);
  html = html.replaceAll('{{slug}}', country.slug);
  html = html.replaceAll('{{avg_cpm}}', country.avg_cpm);
  html = html.replaceAll('{{finance_cpm}}', country.finance_cpm);
  html = html.replaceAll('{{business_cpm}}', country.business_cpm);
  html = html.replaceAll('{{tech_cpm}}', country.tech_cpm);
  html = html.replaceAll('{{entertainment_cpm}}', country.entertainment_cpm);

  html = html.replaceAll(
    '{{intro_1}}',
    `${country.country} is an important YouTube advertising market.`
  );

  html = html.replaceAll(
    '{{intro_2}}',
    `Creators targeting ${country.country} can earn strong CPM depending on niche.`
  );

  html = html.replaceAll(
    '{{million_views_income}}',
    `Estimated earnings: ${country.avg_cpm} per 1,000 monetized views.`
  );

  html = html.replaceAll('{{reason_1}}', 'Strong advertiser demand');
  html = html.replaceAll('{{reason_2}}', 'Healthy digital economy');
  html = html.replaceAll('{{reason_3}}', 'Good audience purchasing power');
  html = html.replaceAll('{{reason_4}}', 'High ad competition');
  html = html.replaceAll('{{reason_5}}', 'Premium traffic quality');

  html = html.replaceAll(
    '{{faq_1_q}}',
    `Is ${country.country} a high CPM country?`
  );

  html = html.replaceAll(
    '{{faq_1_a}}',
    `Yes, ${country.country} can offer strong CPM depending on niche.`
  );

  html = html.replaceAll(
    '{{faq_2_q}}',
    `How much does 100,000 views pay in ${country.country}?`
  );

  html = html.replaceAll(
    '{{faq_2_a}}',
    'Earnings vary by niche and audience quality.'
  );

  html = html.replaceAll(
    '{{faq_3_q}}',
    `Which niches pay most in ${country.country}?`
  );

  html = html.replaceAll(
    '{{faq_3_a}}',
    'Finance, software and business niches usually pay the most.'
  );

  html = html.replaceAll(
    '{{related_links}}',
    `
<li><a href="/youtube-cpm-usa.html">YouTube CPM USA</a ></li>
<li><a href="/youtube-cpm-uk.html">YouTube CPM UK</a ></li>
<li><a href="/youtube-cpm-india.html">YouTube CPM India</a ></li>
`
  );

  fs.writeFileSync(`youtube-cpm-${country.slug}.html`, html);
});

console.log('Generated country pages successfully.');
