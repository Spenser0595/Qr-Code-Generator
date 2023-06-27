# Qr-Code-Generator
Généré un code QR facilement

Le code fourni ici est un exemple de générateur de codes QR utilisant HTML, CSS et JavaScript. L'auteur du code est Spenser Young.

Le fichier HTML (`index.html`) crée la structure de la page web. Il contient une balise `<div>` (`#container`) contenant un titre, un champ de saisie de texte, un bouton et un élément `<canvas>`. Le titre est stylisé avec une taille de police de 24 pixels, et les autres éléments sont stylisés à l'aide de classes définies dans le fichier CSS.

Le fichier CSS (`style.css`) définit les styles visuels des éléments de la page. Les styles incluent un centrage du contenu, une marge supérieure, un rembourrage interne, une couleur d'arrière-plan pour le bouton et une bordure pour l'élément `<canvas>`.

Le fichier JavaScript (`script.js`) contient une fonction nommée `generateQRCode()`. Cette fonction est appelée lorsque l'utilisateur clique sur le bouton "Generate QR Code". Elle récupère la valeur du champ de saisie de texte, puis utilise la bibliothèque QRCode.js pour générer un code QR basé sur cette valeur. Le code QR est ensuite affiché dans l'élément `<canvas>`.

La fonction `QRCode.toCanvas()` est appelée avec l'objet `<canvas>`, le texte à encoder et une fonction de rappel pour gérer les erreurs éventuelles. Lorsque le code QR est généré avec succès, un message est affiché dans la console.

Pour utiliser ce code, vous devez également inclure la bibliothèque QRCode.js (fournie par Spenser Young) dans votre projet et la référencer dans le fichier HTML (`<script src="QRCode.js"></script>`).

En résumé, le code fourni illustre comment créer un générateur de codes QR simple à l'aide d'HTML, CSS et JavaScript, en utilisant la bibliothèque QRCode.js.
