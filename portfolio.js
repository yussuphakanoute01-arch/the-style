/* ======================================================== */
/* Adam’s LeuStyle - Fichier JavaScript Officiel (script.js) */
/* ======================================================== */

const BOUTIQUE_PHONE = "777930369";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Gestion d'ouverture/fermeture du menu mobile
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // 2. Défilement doux vers les ancres et fermeture du menu mobile
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Lecture/pause des vidéos sur simple clic
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  // 4. Copie en 1 clic du numéro officiel 777930369
  const copyButtons = document.querySelectorAll(".btn-copy-phone");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(BOUTIQUE_PHONE).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = "✓ Numéro copié (777930369)";
        btn.classList.add("bg-emerald-600", "text-white");
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("bg-emerald-600", "text-white");
        }, 2200);
      });
    });
  });

  // 5. Fonction globale de commande WhatsApp automatique
  window.orderOnWhatsApp = function (modelName, price, color = "Standard", size = "Sur-Mesure") {
    const message = `Bonjour Adam's LeuStyle,
Je souhaite commander la tenue : « ${modelName} »
• Couleur : ${color}
• Taille : ${size}
• Prix affiché : ${price}
Avez-vous cette pièce à la boutique de Thiaroye Azur ou faites-vous la livraison ?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/221${BOUTIQUE_PHONE}?text=${encoded}`, "_blank");
  };

  // 6. Like interactif sur le flux social
  document.querySelectorAll(".social-like-btn").forEach((likeBtn) => {
    likeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const countEl = likeBtn.querySelector(".like-count");
      if (countEl) {
        let count = parseInt(countEl.innerText.replace(/\s/g, ""), 10);
        if (!likeBtn.classList.contains("liked")) {
          likeBtn.classList.add("liked", "text-rose-500");
          countEl.innerText = (count + 1).toLocaleString();
        } else {
          likeBtn.classList.remove("liked", "text-rose-500");
          countEl.innerText = (count - 1).toLocaleString();
        }
      }
    });
  });
});