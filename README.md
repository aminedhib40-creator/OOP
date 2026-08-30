# Programmation Orientée Objet (OOP)

##  Exercice 1 : Classe Voiture

Créer une classe **Voiture** en utilisant le concept de **Programmation Orientée Objet (OOP)**.

---

```javascript
function Voiture () {
  // TODO : ton code ici
}

```

##  Votre classe doit avoir :

### Propriétés :

- **nombreDePassagers** : _number_  
  → le nombre de passagers actuellement dans la voiture.

- **nombreMaxDePassagers** : _number_  
  → le nombre maximum de passagers que la voiture peut transporter.

- **carburant** : _number_  
  → la quantité de carburant (en gallons) dans la voiture.

- **kilometrage** : _number_  
  → le nombre de miles parcourus par la voiture.

---

##  Méthodes :

###  monter
Fonction qui :
- augmente le nombre de passagers dans la voiture  
- retourne `"plus de place"` si on essaie d’ajouter un passager alors que la voiture est pleine  

---

###  descendre
Fonction qui :
- diminue le nombre de passagers  
- retourne `"personne à bord"` si on essaie d’enlever un passager alors qu’il n’y a plus personne dans la voiture  

---

###  rouler
Fonction qui :
- prend en paramètre le nombre de miles à parcourir  
- augmente la propriété **kilometrage** selon la distance parcourue  
- diminue la quantité de carburant selon la règle suivante :  
  - **1 gallon = 1 mile / nombre de passagers**
- retourne `"pas de conducteur"` si le nombre de passagers est égal à 0  
- retourne `"carburant insuffisant"` si le carburant n’est pas suffisant pour parcourir la distance demandée  

---

##  Exercice 2 : Classe Grille-pain

---
Créer une classe ** Grille-pain** en utilisant le concept de **Programmation Orientée Objet (OOP)**.

0. Dans cet exercice, nous allons créer une classe **GrillePain**, et notre grille-pain va griller du pain (parce que c’est ce que font les grille-pains). Voici un modèle de départ pour la classe GrillePain :

```javascript
function GrillePain() {
  // TODO : ton code ici
}

```

Votre classe doit avoir :

### Propriétés :

- **toast** : _string_ pour représenter le pain dans le grille-pain  
- **estEnMarche** : _boolean_ pour indiquer si le grillage est en cours  
- **minuterie** : _number_ pour stocker l’identifiant du setTimeout  


##  Méthodes :

- **ajouterToast** : _function_ qui :
  - une chaîne de caractères représentant le pain 
  - met à jour la propriété **toast** avec ce pain.

- **ejecter** : _function_ qui :
  - ne prend aucun paramètre et doit retourner l’un des deux résultats suivants :
  - S’il n’y a pas de pain dans le grille-pain, elle doit retourner une chaîne indiquant que le grille-pain est vide. 
  - S’il y a du pain dans le grille-pain, elle doit retourner le pain et remettre la propriété toast de l’instance à `undefined`.

- **demarrer** : _function_ qui :
  - La méthode demarrer est responsable du grillage du pain. On utilisera la fonction intégrée setTimeout, qui prend deux paramètres :
  - une fonction et un temps (nombre) en millisecondes (par exemple 1000 représente une seconde).
  - La fonction setTimeout exécute la fonction donnée une seule fois après le temps écoulé et retourne un identifiant qui peut être utilisé avec clearTimeout pour annuler l’exécution.
  - L’idée de demarrer est d’utiliser setTimeout pour :
     - affiche `"Ding !"` après un certain temps 
     - modifier la propriété toast de l’instance pour indiquer que le pain est grillét : transforme le toast en `"toast (grillé)"`  
     - Si aucun pain n’est présent dans le grille-pain au moment où demarrer est appelée retourne `"ajoutez du pain"`
   
- **arreter** : _function_ qui :
  - La méthode arreter doit annuler un grillage en cours en utilisant clearTimeout avec la valeur retournée par setTimeout dans la méthode demarrer :
       - annule le grillage avec `clearTimeout`
