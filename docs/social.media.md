# Social Media API Documentation

## Endpoints

### 1. Get All Social Media From Google API

- **Method**: `GET`
- **Endpoint**: `/api/social-media/search`
- **Description**: Retrieve a list of all social media.
- Query Parameters (optional):
  - q: `string` (query to search social media
  - page: `number` (default: 1)
  - limit: `number` (default: 10)
- **Response Body**:

```json
{
  "status": true,
  "message": "Search completed successfully",
  "query": "hmw tebing site:instagram.com",
  "data": [
    {
      "kind": "customsearch#result",
      "title": "CONGRATULATIONS! Kami ucapkan selamat bagi seluruh Insan ...",
      "htmlTitle": "CONGRATULATIONS! Kami ucapkan selamat bagi seluruh Insan ...",
      "link": "https://www.instagram.com/p/CbxCBIJPtm_/",
      "displayLink": "www.instagram.com",
      "snippet": "Mar 31, 2022 ... ... HMW) Mie Ayam Hunter (PT HKI) Hostile Kids #2 (Div. OPT) PUBG Mobile Tebing Rebellion (PT HMW) Minang Deng Laka (Div. SIT) ...",
      "htmlSnippet": "Mar 31, 2022 <b>...</b> ... <b>HMW</b>) Mie Ayam Hunter (PT HKI) Hostile Kids #2 (Div. OPT) PUBG Mobile <b>Tebing</b> Rebellion (PT <b>HMW</b>) Minang Deng Laka (Div. SIT)&nbsp;...",
      "formattedUrl": "https://www.instagram.com/p/CbxCBIJPtm_/",
      "htmlFormattedUrl": "https://www.instagram.com/p/CbxCBIJPtm_/",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqPj9KQ_0Tk9DvI37hbZ_daLm3J5Wx5WaARtJsjCAUvuT9aSazz2rkAQ&s",
            "width": "201",
            "height": "251"
          }
        ],
        "metatags": [
          {
            "og:image": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2806032910170061855",
            "theme-color": "#FFFFFF",
            "twitter:card": "summary_large_image",
            "og:site_name": "Instagram",
            "application-title": "Instagram",
            "al:android:package": "com.instagram.android",
            "bingbot": "noarchive",
            "medium": "image",
            "al:ios:url": "instagram://media?id=2806032916386077119",
            "og:description": "36 likes, 0 comments - hutamakarya64th on March 31, 2022: \"CONGRATULATIONS! Kami ucapkan selamat bagi seluruh Insan Hutama yang sukses menyabet trofi Individu maupun Tim dalam rangka HK E-Sports Tahun 2022! 👑🏆\n\nMobile Legends: Bang-Bang\n🥇 Harus Menambah Win-Win (PT HMW)\n🥈 Mie Ayam Hunter (PT HKI)\n🥉 Hostile Kids #2 (Div. OPT)\n\nPUBG Mobile\n🥇 Tebing Rebellion (PT HMW)\n🥈 Minang Deng Laka (Div. SIT)\n🥉 HBD Gaming (PT HKI)\n\nEA Sports FIFA 22\n🥇 Maulana Fetrisena A. (Div. HC)\n🥈 Varyan Sumarly (Div. HC)\n🥉 Redhito Prameza S. (PT HKR)\n\nStumble Guys\n🥇 Syatrio Lumacsono (PT HKA)\n🥈 Agatha Leonie C. (PT HKA)\n🥉 Kusuma Ariftama (Div. RJT)\n\nSampai bertemu di pagelaran HK E-Sports tahun berikutnya! ✊\n\n—\n#HubungkanKebaikan\n \nSalam AKHLAK,\nPT Hutama Karya (Persero)\".",
            "twitter:image": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2806032910170061855",
            "al:ios:app_store_id": "389801252",
            "twitter:site": "@instagram",
            "instapp:owner_user_id": "31254611739",
            "og:type": "article",
            "twitter:title": "HUT ke-64 Hutama Karya (@hutamakarya64th) • Instagram photos and videos",
            "al:ios:app_name": "Instagram",
            "og:title": "HUT ke-64 Hutama Karya on Instagram: \"CONGRATULATIONS! Kami ucapkan selamat bagi seluruh Insan Hutama yang sukses menyabet trofi Individu maupun Tim dalam rangka HK E-Sports Tahun 2022! 👑🏆\n\nMobile Legends: Bang-Bang\n🥇 Harus Menambah Win-Win (PT HMW)\n🥈 Mie Ayam Hunter (PT HKI)\n🥉 Hostile Kids #2 (Div. OPT)\n\nPUBG Mobile\n🥇 Tebing Rebellion (PT HMW)\n🥈 Minang Deng Laka (Div. SIT)\n🥉 HBD Gaming (PT HKI)\n\nEA Sports FIFA 22\n🥇 Maulana Fetrisena A. (Div. HC)\n🥈 Varyan Sumarly (Div. HC)\n🥉 Redhito Prameza S. (PT HKR)\n\nStumble Guys\n🥇 Syatrio Lumacsono (PT HKA)\n🥈 Agatha Leonie C. (PT HKA)\n🥉 Kusuma Ariftama (Div. RJT)\n\nSampai bertemu di pagelaran HK E-Sports tahun berikutnya! ✊\n\n—\n#HubungkanKebaikan\n \nSalam AKHLAK,\nPT Hutama Karya (Persero)\"",
            "twitter:maxage": "86400",
            "color-scheme": "light",
            "al:android:url": "https://www.instagram.com/p/CbxCBIJPtm_/",
            "fb:app_id": "124024574287414",
            "apple-mobile-web-app-status-bar-style": "default",
            "viewport": "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover",
            "mobile-web-app-capable": "yes",
            "og:url": "https://www.instagram.com/p/CbxCBIJPtm_/",
            "al:android:app_name": "Instagram"
          }
        ],
        "cse_image": [
          {
            "src": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2806032910170061855"
          }
        ]
      }
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number"
  }
}
```

```json
{
  "status": "error",
  "message": "Error message detailing what went wrong"
}
```
