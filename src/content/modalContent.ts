export enum modalContentType {
    problemStory = 0,
    historyStory,
}

export const modalContent = [
    {
        type: modalContentType.problemStory,
        id: "p1",
        title: "Zugang verweigert",
        subtitle: "Wie Elena Zugang zu <span class='md-body-heading-b'>Daten</span> & <span class='md-body-heading-c'>Erinnerungen</span> verlor",
        body: `Elena war seit Jahren bei einer Social-Media-Plattform angemeldet und hatte dort viele Erinnerungen in Form von Fotos und Beiträgen gespeichert. Die Plattform diente ihr auch als Identitätsprovider für die Anmeldung bei anderen Diensten. Eines Tages erhielt Elena jedoch eine Benachrichtigung, dass ihr der Zugang zu der Plattform verweigert wurde. Ohne Vorwarnung oder Begründung wurde ihr Konto gesperrt.
        Elena war geschockt und verwirrt. Sie hatte keine Ahnung, was der Grund für die Sperrung sein könnte. Sie versuchte, sich an den Kundendienst der Plattform zu wenden, aber ihre Anfragen blieben unbeantwortet. Sie konnte nicht mehr auf ihren Speicher zugreifen und hatte auch Schwierigkeiten, sich bei anderen Diensten anzumelden, da sie ihr Konto bei der Plattform nicht mehr nutzen konnte.
        Elena fühlte sich machtlos und frustriert. Sie hatte so viele Erinnerungen auf der Plattform gespeichert, die sie nun nicht mehr abrufen konnte. Sie hatte auch keine Möglichkeit, ihre Daten zu sichern oder zu exportieren. Es war, als wäre ein Teil ihres Lebens einfach verschwunden.
        Schließlich erfuhr Elena von anderen Nutzer:innen, dass die Plattform in der Vergangenheit Probleme mit dem Datenschutz und dem Missbrauch von Nutzerdaten hatte. Möglicherweise hatte Elena versehentlich gegen die Nutzungsbedingungen verstoßen oder war unwissentlich Opfer von Datenmissbrauch geworden.
        Elena erkannte, wie abhängig sie von der Plattform geworden war und wie wichtig es war, ihre Daten zu schützen und zu sichern. Sie beschloss, in Zukunft vorsichtiger zu sein und alternative Methoden zu verwenden, um ihre Erinnerungen zu speichern und sich bei anderen Diensten anzumelden.`,
    }
]