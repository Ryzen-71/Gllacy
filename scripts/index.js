//  Открытие и зактытие  окна поиска в headere.
let navigationLinkSearch = document.querySelector(".navigation-link-search");
let popoverSearch = document.querySelector(".popover-search")

function openPopoverSearch() {
    popoverSearch.classList.add("is-visible")
}

function closePopoverSearch() {
    popoverSearch.classList.remove("is-visible")
}

navigationLinkSearch.addEventListener("click", () => {
 if(popoverSearch.classList.contains("is-visible")) {
    closePopoverSearch()
 } else {
    openPopoverSearch()
 }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    popoverSearch.classList.remove("is-visible")
  }
});

// /  Открытие и зактытие  окна входа в личный кабинет в headere.
let navigationLinkLogin = document.querySelector(".navigation-link-login");
let modalPersonalAccount = document.querySelector(".modal-personal-account")

navigationLinkLogin.addEventListener("click", () => {
  modalPersonalAccount.classList.toggle("is-visible")
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalPersonalAccount.classList.remove("is-visible")
  }
});

// /  Открытие и зактытие  окна корзины  в headere.
let navigationLinkBasket = document.querySelector(".navigation-link-basket");
const  popoverCart = document.getElementById("popoverBasket")

navigationLinkBasket.addEventListener("click", () => {
  popoverCart.classList.toggle("is-visible")
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    popoverCart.classList.remove("is-visible")
  }
});

// Зактытие модального окна.Если модальое окно реализована с помощью тега dialog
let dialigModalFeedback = document.getElementById("windowModalFeedback");
let buttonModalClose = document.getElementById('closeModalFeedback');

buttonModalClose.addEventListener("click", () => {
  dialigModalFeedback.close();
})

document.addEventListener('click', function(event) {
  if (event.target == windowModalFeedback) {
      dialigModalFeedback.close();
      }
});

//  Открытие и зактытие модального окна.Реализация на дивах

// const isEscapeKey = (evt) => evt.key === 'Escape';

// let contactsButton = document.querySelector(".contacts-button");
// let windowModalFeedback = document.querySelector(".modal-container");
// let buttonModalClose = document.querySelector('.modal-close-button');

// function openModalWindow() {
//   windowModalFeedback.classList.add('is-open')
// }

// function closeModalWindow() {
//   windowModalFeedback.classList.remove('is-open')
// }

// contactsButton.addEventListener("click", () => {
//   openModalWindow()
// })

// buttonModalClose.addEventListener("click", () => {
//   closeModalWindow()
// })

// document.addEventListener('keydown', (evt) => {
//   if (isEscapeKey(evt))  {
//     evt.preventDefault();
//     closeModalWindow()
//   }
// });

// document.addEventListener('click', function(event) {
//   if (event.target == windowModalFeedback) {
//       closeModalWindow()
//   }
// });



