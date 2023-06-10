export const useCaseBanking = [
    {
        title: "Anmeldung starten",
        body: `**Du bist in der Rolle des Holders.** Als Holder wird eine Person beschrieben, die eine digitale Brieftasche führt. In diesem Beispiel möchtest du ein Bankkonto eröffnen.
        - Melde dich über Jetzt anmelden`
    },
    {
        title: "Klassische Anmeldung",
        body: `Nun hast du die Wahl. Möchtest du den klassischen Anmeldeprozess folgen, inklusive VideoIdent, oder dein Wallet nutzen?
        - Du entscheidest dich für das EU Wallet.
        - Wähle „Mit EU Wallet anmelden“ (Los jetzt!)
        - Wähle ein Wallet deiner Wahl
        `
    },
    {
        title: "Verifizierung im Wallet",
        body: `In deinem Wallet bekommst du eine Datenanfrage, die dich nach den Daten fragt, die benötigt werden, um im Banking deine Identität festzustellen.
        Wie du siehst ist Acmé bereits als Vertrauenswürdig eingestuft, da es als offizielles Finanzinstitut auf einer Whitelist steht.
        Optional ist hier die Steuernummer, da die häufig auch im Hintergrund durch Finanzämter ermittelt werden kann.
        - Nimm an um fortzufahren
        `
    },
    {
        title: "Validierung",
        body: `Im Hintergrund wird nun von Acmé AG über die entsprechenden Institute geprüft, ob dein Personalausweis und deine Steuernummer valide ist.`
    },
    {
        title: "Deine Daten wurden validiert",
        body: `Mal angenommen du müsstest nicht noch 10 Nutzungsbedingungen akzeptieren, könntest du nun direkt durchstarten und dein Konto eröffnen.`
    },
    {
        title: "Zack Fertig",
        body: `Bankkonto eröffnet.`
    },
]