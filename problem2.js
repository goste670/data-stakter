// Fonction pour calculer le produit scalaire de deux vecteurs
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
      throw new Error("Les vecteurs doivent avoir la même longueur");
    }
  
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
  
    return ps;
  }
  
  // Fonction pour vérifier si deux vecteurs sont orthogonaux
  function areOrthogonal(v1, v2) {
    const produitScalaire = dotProduct(v1, v2);
    return produitScalaire === 0;
  }
  
  // Exemple d'utilisation
  const vector1 = [1, 2, 3];
  const vector2 = [-1, 0, 1];
  const resultatOrthogonalite = areOrthogonal(vector1, vector2);
  console.log("Les vecteurs sont orthogonaux:", resultatOrthogonalite);