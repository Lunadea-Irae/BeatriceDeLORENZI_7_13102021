
/*

schema user :

_id : number, required, unique          // auto-implémenté, unique
name : string, required                 // pseudo de l'utilisateur
email : string, required, unique        // unique
password : string, required             // crypté
service : string                        // choix dans une liste
birthday : date                         // date d'anniversaire
presentation : string                   // hobbies, parcours etc...
picture : blob                          // avatar
settings : {
    followedUsers : [number],           // alerté quand nouveau post de ces users
    followedTags : [string],            // alerté quand nouveau post avec un de ces tags
    hiddenUsers : [number],             // n'affiche pas les posts de ces user
    hiddenTags : [string]               // n'affiche pas les posts avec un de ces tags
}
authLvl : number, required, default = 0 // niveau d'autorisation (0 = banni, 1 = utilisateur, 8 = modérateur, 9 = administateur)


*/