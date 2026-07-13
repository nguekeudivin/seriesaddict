A modifier

1. Page Calendrier
   CalendarPage
2. Saisons d'une serie [ok]
   SerieSeasonsPage
3. Page serie seule
   SeriesDetailsPageVariant
4. Page saison seule [OK]
   SerieSeasonSinglePage
5. Page episode seule [ok]
   SingeEpisodePage [ok]
6. Page Regarde la serie
   SerieWatchPage
7. Page serie similaire
   SimilarTastePage
8. Page episode avoir [ok]
   EpisodesToWatchPageVariantC
9. WhislistPage [ok]
10. Calendrier Personnel de l'utilisateur [ok]
    UserCalendarPage
11. Page historique episode vus [okey]
    WatchHistoryPage
    WatchHistoriPageb [Good]
12. Pages ecritures [ok]
    ContactPage [ok]
    CookiesPage [ok]
    HelpPage [ok]
    PrivacyPage [ok]
    TeamPage [ok]
    TermsPage [ok]

/series/season/:seasonNumber → SerieSeasonSinglePage
/series/watch → SerieWatchPage
/series-hub → SeriesHubPage
/episode → SingleEpisodePage
/user/history → WatchHistoryPage
/my/calendar → UserCalendarPage
/my/watchlist → WishlistPage
/recommandations → SimilarTastePage
/episodes-a-voir → EpisodesToWatchPage
/contact → ContactPage
/equipe → TeamPage
/aide → HelpPage
/cgu → TermsPage
/cookies → CookiesPage
/donnees-personnelles → PrivacyPage

Nouvelles entrées dans routes.js
episode → /episode
my-calendar → /my/calendar
series-watch → /series/watch
series-hub → /series-hub
recommandations → /recommandations
contact → /contact
team → /equipe
help → /aide
terms → /cgu
cookies → /cookies
privacy → /donnees-personnelles
