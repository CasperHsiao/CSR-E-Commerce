/**
 * Casper Hsiao
 * 08.02.2019
 * CSE 154 AC
 * This is the index.js for my CSR E-commerce website. It provides functions
 * to view all the sneakers in the store, including name, price and image. Furthermore, provides
 * the detail name, size, price and descriptionof the sneakers in shop view and allows client to
 * add a sneaker to the cart. It also provides filter to view each sneaker category of the store.
 * Also, it allows the client to view frequently asked question and submit feebacks.
 */
"use strict";
(function() {
  const URL = "/csr/"
  window.addEventListener("load", init);

  /**
   * Initiates the website with the featured products displayed on the cover page and faq append to
   * the faq view. Sets up the buttons for navigation.
   */
  function init() {
    populateFeautured();
    populateFaq();
    id("logo").addEventListener("click", function() {
      directView("featured-view");
    });
    id("men").addEventListener("click", populateMain);
    id("women").addEventListener("click", populateMain);
    id("sale").addEventListener("click", populateMain);
    id("all").addEventListener("click", populateMain);
    id("cart").addEventListener("click", function() {
      directView("cart-view");
    });
    id("contact-us").addEventListener("click", contactView);
    id("faq").addEventListener("click", faqView);
    id("submit-btn").addEventListener("click", function(event) {
      event.preventDefault();
      storeFeedback();
    });
  }

  /**
   * Stores the feedback submitted by the customers.
   */
  function storeFeedback() {
    let url = URL + "feedback";
    let params = new FormData(id("feedback"));
    fetch(url, { method : "POST", body : params })
      .then(checkStatus)
      .then(response => response.text())
      .then(displaySuccess)
      .catch(handleRequestError);
  }

  /**
   * Display friendly user message after successfully submitted a feedback.
   */
  function displaySuccess(response) {
    id("success-message").innerHTML = response;
    setTimeout(function() {
      id("success-message").textContent = "";
    }, 2500);
    id("feedback").classList.add("hidden");
  }

  /**
   * Display FAQ view.
   */
  function faqView() {
    qs("main").classList.add("hidden");
    id("contact-us").classList.add("hidden");
    id("faq-list").classList.remove("hidden");
  }

  /**
   * Display contact us view.
   */
  function contactView() {
    qs("main").classList.add("hidden");
    qs("#feedback textarea").value = "";
    id("feedback").classList.remove("hidden");
    id("faq").classList.add("hidden");
  }

  /**
   * Fetches the FAQs from web service API.
   */
  function populateFaq() {
    let url = URL + "faq";
    fetch(url)
      .then(checkStatus)
      .then(response => response.json())
      .then(appendFaq)
      .catch(handleRequestError);
  }

  /**
   * Appends the FAQs fetched onto the FAQ view.
   */
  function appendFaq(response) {
    let faq = response;
    for (let i = 0; i < faq.length; i++) {
      let question = faq[i].question;
      let answer = faq[i].answer;
      let q = gen("h3");
      let a = gen("p");
      q.textContent = question;
      a.textContent = answer;
      id("faq-list").appendChild(q);
      id("faq-list").appendChild(a);
    }
  }

  /**
   * Directs the view of different categories.
   */
  function directView(show) {
    qs("main").classList.remove("hidden");
    id("feedback").classList.add("hidden");
    id("faq-list").classList.add("hidden");
    id("faq").classList.remove("hidden");
    id("contact-us").classList.remove("hidden");
    id("featured-view").classList.add("hidden");
    id("shop-view").classList.add("hidden");
    id("cart-view").classList.add("hidden");
    id("main-view").classList.add("hidden");
    id(show).classList.remove("hidden");
  }

  /**
   * Fetches all the sneaker names and prices from the webservice API.
   */
  function populateMain() {
    directView("main-view");
    id("product-list").innerHTML = "";
    let section = this.id;
    let url = URL;
    if(section ==="all") {
      id("category").textContent = "SHOP ALL"
      url += "sneaker/all";
    } else {
      id("category").textContent = section.toUpperCase();
      url += "category/" + section;
    }
    fetch(url)
      .then(checkStatus)
      .then(response => response.json())
      .then(appendMain)
      .catch(handleRequestError);
  }

  /**
   * Append all the sneaker names and prices to the main view.
   */
  function appendMain(response) {
    let sneakers = response;
    for (let i = 0; i < sneakers.length; i++) {
      let sneaker = sneakers[i];
      let product = gen("div");
      product.classList.add("product");
      let name = sneaker.name;
      let img = generateImage(name);
      let title = gen("h3");
      title.textContent = processName(name);
      let price = gen("p");
      price.textContent = "$" + sneaker.price;
      let shop = gen("button");
      shop.classList.add("shop");
      shop.textContent = "Shop";
      shop.addEventListener("click", function() {
        populateDetails(name);
      });
      product.appendChild(img);
      product.appendChild(title);
      product.appendChild(price);
      product.appendChild(shop);
      id("product-list").appendChild(product);
    }
  }

  /**
   * Fetches all the sneaker names and prices of the featured category from the webservice API.
   */
  function populateFeautured() {
    id("featured-view").innerHTML = "";
    let url = URL + "category/featured";
    fetch(url)
      .then(checkStatus)
      .then(response => response.json())
      .then(appendFeatured)
      .catch(handleRequestError);
  }

  /**
   * Append all the of the featured category sneaker names and prices to the fatured view.
   */
  function appendFeatured(response) {
    let sneakers = response;
    for (let i = 0; i < sneakers.length; i++) {
      let sneaker = sneakers[i];
      let product = gen("div");
      product.classList.add("featured");
      let name = sneaker.name;
      product.style.backgroundImage = "url('img/sneakers/" + name + ".jpeg')";
      let title = gen("h3");
      title.textContent = processName(name);
      let shop = gen("button");
      shop.classList.add("shop");
      shop.textContent = "Shop";
      shop.addEventListener("click", function() {
        populateDetails(name);
      });
      product.appendChild(title);
      product.appendChild(shop);
      id("featured-view").appendChild(product);
    }
  }

  /**
   * Fetches all the details of the given sneaker name from the webservice API.
   */
  function populateDetails(name) {
    directView("shop-view");
    let url = URL + "sneaker/" + name;
    fetch(url)
      .then(checkStatus)
      .then(response => response.json())
      .then(appendDetails)
      .catch(handleRequestError);
  }

  /**
   * Append the sneaker name, price, size and description to the shop view.
   */
  function appendDetails(response) {
    let sneaker = response;
    let name = sneaker.name;
    qs("#shop-view .shoePic").src = "img/sneakers/" + name + ".jpeg";
    id("name").textContent = processName(name);
    id("price").textContent = sneaker.price;
    id("description").textContent = sneaker.description;
    let add = gen("button");
    add.id = "add-to-cart";
    add.textContent = "Add to Cart";
    let info = id("info");
    info.removeChild(info.lastChild);
    info.appendChild(add);
    add.addEventListener("click", function() {
      addToCart(name, id("price").textContent, id("size").value, id("quantity").value);
    });
  }

  function addToCart(name, priceIn, sizeIn, quantityIn) {
    let product = gen("div");
    product.classList.add("productContainer");
    let img = generateImage(name);
    img.classList.add("shoePic");
    let info = gen("info");
    let title = gen("h4");
    title.textContent = processName(name);
    let price = gen("p");
    price.textContent = "Price: $" + priceIn;
    let size = gen("p");
    size.textContent = "Size: " + sizeIn;
    let quantity = gen("p");
    quantity.textContent = "Quantity: " + quantityIn;
    let remove = gen("button");
    remove.classList.add("remove");
    remove.textContent = "Remove";
    remove.addEventListener("click", function() {
      removeFromCart(product, priceIn, quantityIn);
    });
    info.appendChild(title);
    info.appendChild(price);
    info.appendChild(size);
    info.appendChild(quantity);
    info.appendChild(remove);
    product.appendChild(img);
    product.appendChild(info);
    id("cart-list").appendChild(product);
    updateCart(priceIn, quantityIn);
  }

  function removeFromCart(product, price, quantity) {
    product.parentNode.removeChild(product);
    updateCart("-" + price, quantity);
  }

  function updateCart(price, quantity) {
    id("subtotal").textContent = parseInt(id("subtotal").textContent) + parseInt(price) * parseInt(quantity);
    id("tax").textContent = parseInt(id("subtotal").textContent) * 0.1;
    id("total").textContent = parseInt(id("tax").textContent) +
      parseInt(id("subtotal").textContent);
  }

  function generateImage(name) {
    let img = gen("img");
    img.src = "img/sneakers/" + name + ".jpeg";
    img.alt = name;
    return img;
  }

  function processName(name) {
    let displayName = name.split("-");
    if (displayName.length == 2) {
      displayName = displayName[0].replace(/_/g, " ") + " '" +
        displayName[1].replace(/_/g, " ") + "'";
    } else {
      displayName = displayName[0].replace(/_/g, " ");
    }
    return displayName;
  }

  /**
   * Populates results area with user-friendly error message.
   */
  function handleRequestError() {
    qs("main").classList.add("hidden");
    qs("footer").classList.add("hidden");
    let buttons = qsa("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    id("error-msg").classList.remove("hidden");
  }

  // ------------------------- HELPER FUNCTIONS ------------------------- //
  /**
   * Helper function to return the response's result text if successful,
   * otherwise returns the rejected Promise result with an error status and
   * corresponding text.
   * @param {object} response - response to check for success/error.
   * @return {object} - valid response if response was successful, otherwise
   *                    rejected Promise result.
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response;
  }

  /**
   * Returns the first element of the given selector.
   * @param {string} selector - Takes the CSS selector.
   * @return {DOMObject} Returns the required element.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns all the elements of the given selector.
   * @param {string} selector - Takes the CSS selector.
   * @return {DOMList} Returns an array of required elements.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns a new DOM element with the given tag name (if one exists). If el is not
   * a correct tag name, returns undefined.
   * @param {string} el - tag name.
   * @return {object} newly-created DOM object of given tag type.
   */
  function gen(el) {
    return document.createElement(el);
  }
})();
