Voici la **version nettoyée** : pour toutes les pages avec **Design rebuild = YES**, la colonne **Link est laissée vide** afin d’éviter toute confusion avec l’ancien site.

---

# Core Pages

| #   | Page           | Link | Design rebuild |
| --- | -------------- | ---- | -------------- |
| 1   | Home           |      | YES            |
| 2   | Series Listing |      | YES            |
| 3   | Search         |      | YES            |

---

# News

| #   | Page         | Link                                                                                                                                       | Design rebuild |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 4   | News Listing |                                                                                                                                            | YES            |
| 5   | News Details | [https://seriesaddict.fr/news/29610-calendrier-series-tele-mars-2026](https://seriesaddict.fr/news/29610-calendrier-series-tele-mars-2026) |                |

---

# Calendar

| #   | Page     | Link | Design rebuild |
| --- | -------- | ---- | -------------- |
| 6   | Calendar |      | YES            |

---

# Videos

| #   | Page             | Link                                                                                                                   | Design rebuild |
| --- | ---------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------- |
| 7   | Trailers Listing | [https://seriesaddict.fr/videos](https://seriesaddict.fr/videos)                                                       |                |
| 8   | Trailer Details  | [https://seriesaddict.fr/videos/dexter-original-sin-teaser](https://seriesaddict.fr/videos/dexter-original-sin-teaser) |                |

---

# Collections

| #   | Page                | Link                                                                                                                                     | Design rebuild |
| --- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 9   | Collections Listing | [https://seriesaddict.fr/collections](https://seriesaddict.fr/collections)                                                               |                |
| 10  | Collection Details  | [https://seriesaddict.fr/collections/series-adaptees-de-jeux-videos](https://seriesaddict.fr/collections/series-adaptees-de-jeux-videos) |                |

---

# Series Pages

| #   | Page               | Link                                                                                       | Design rebuild |
| --- | ------------------ | ------------------------------------------------------------------------------------------ | -------------- |
| 11  | Series Details     |                                                                                            | YES            |
| 12  | Series – Similar   | [https://seriesaddict.fr/the-pitt/similaires](https://seriesaddict.fr/the-pitt/similaires) |                |
| 13  | Series – Seasons   | [https://seriesaddict.fr/the-pitt/seasons](https://seriesaddict.fr/the-pitt/seasons)       |                |
| 14  | Series – News      | [https://seriesaddict.fr/the-pitt/news](https://seriesaddict.fr/the-pitt/news)             |                |
| 15  | Series – Reviews   | [https://seriesaddict.fr/the-pitt/avis](https://seriesaddict.fr/the-pitt/avis)             |                |
| 16  | Series – Community | [https://seriesaddict.fr/the-pitt/community](https://seriesaddict.fr/the-pitt/community)   |                |
| 17  | Series – Trailers  | [https://seriesaddict.fr/the-pitt/trailers](https://seriesaddict.fr/the-pitt/trailers)     |                |
| 18  | Series – Shop      | [https://seriesaddict.fr/the-pitt/shop](https://seriesaddict.fr/the-pitt/shop)             |                |

---

# User Pages

Reference design : **User-Feed**

| #   | Page               | Link | Design rebuild |
| --- | ------------------ | ---- | -------------- |
| 19  | User – Feed        |      | YES            |
| 20  | User – Serietheque |      |                |
| 21  | User – Friends     |      |                |
| 22  | User – Lists       |      |                |
| 23  | User – Create List |      |                |

---

# Community

| #   | Page            | Link                                                               | Design rebuild |
| --- | --------------- | ------------------------------------------------------------------ | -------------- |
| 24  | Members Listing | [https://seriesaddict.fr/membres](https://seriesaddict.fr/membres) |                |

---

# Shop

| #   | Page              | Link                                                                 | Design rebuild |
| --- | ----------------- | -------------------------------------------------------------------- | -------------- |
| 25  | SeriesAddict Shop | [https://seriesaddict.fr/boutique](https://seriesaddict.fr/boutique) |                |

---

# Authentication

| #   | Page            | Link                                                                       | Design rebuild |
| --- | --------------- | -------------------------------------------------------------------------- | -------------- |
| 26  | Login           | [https://seriesaddict.fr/auth/login](https://seriesaddict.fr/auth/login)   |                |
| 27  | Signup          | [https://seriesaddict.fr/auth/signup](https://seriesaddict.fr/auth/signup) |                |
| 28  | Forgot Password | [https://seriesaddict.fr/auth/forgot](https://seriesaddict.fr/auth/forgot) |                |

---

# Implementation Guide

### 1. Pages with **Design rebuild = YES**

These pages **already implement the new design** and act as **design references** for the rest of the platform.

Reference pages:

- Home
- Series Listing
- Series Details
- Search
- News Listing
- Calendar
- User-Feed

Their layout, spacing, typography, and components define the **new UI system**.

---

### 2. Pages without **Design rebuild**

These pages **still need to be redesigned and implemented**.

Implementation rules:

**Rule A — Use the link as functional reference**

If a link is present, the page structure and content organization should follow the referenced page.

Examples:

- Trailer listing
- Trailer details
- Collection listing
- Collection details
- Series subpages
- Members listing
- Shop
- Authentication pages

---

**Rule B — Use an existing redesigned page as layout reference**

Some modules must reuse the layout of a redesigned page.

Example:

User pages must reuse the **User-Feed layout**:

- User – Serietheque
- User – Friends
- User – Lists
- User – Create List

Only the **content blocks change**, the **layout remains consistent**.

---
