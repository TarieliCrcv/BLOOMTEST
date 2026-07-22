# TC-NAVBAR-001
Navbar is visible on the homepage.

REQ: NAVBAR-001
Priority: High
Preconditions: User is on the homepage.

Steps:
1. Open the homepage.
2. Observe the navigation bar.

Expected: The navigation bar is visible and its navigation elements are accessible.
# TC-NAVBAR-002
Navbar remains accessible while scrolling.

REQ: NAVBAR-001
Priority: High
Preconditions: User is on a page with sufficient scrollable content.

Steps:
1. Open the page.
2. Scroll down.
3. Continue scrolling through the page.
4. Observe the navigation bar.

Expected: The navigation bar remains accessible while scrolling.
# TC-NAVBAR-004
Collections navigation displays available categories.

REQ: NAVBAR-001
Priority: High

Steps:
1. Open the Collections navigation.
2. Observe the available options.

Expected: The available fragrance categories are displayed.
# TC-NAVBAR-005
Collections navigation redirects to the selected category.

REQ: NAVBAR-001
Priority: High

Steps:
1. Open the Collections navigation.
2. Select a fragrance category.
3. Observe the resulting collection.

Expected: The selected fragrance category is displayed.
# TC-NAVBAR-006
Logged-out navigation displays authentication options.

REQ: NAVBAR-001
Priority: High
Preconditions: User is logged out.

Steps:
1. Open the application.
2. Observe the navigation bar.

Expected: Login and registration options are available.
# TC-NAVBAR-007
Logged-in navigation displays account options.

REQ: NAVBAR-001
Priority: High
Preconditions: User is authenticated.

Steps:
1. Log in.
2. Observe the navigation bar.
3. Open the account navigation.

Expected: Account-related navigation options are available.
# TC-NAVBAR-008
User can change the application language.

REQ: NAVBAR-001
Priority: Medium

Steps:
1. Open the language selector.
2. Select another available language.
3. Observe the application.

Expected: The application language changes to the selected language.
# TC-CAROUSEL-001
Carousel displays fragrance cards.

REQ: CAROUSEL-002
Priority: High

Steps:
1. Navigate to the Featured Fragrances section.
2. Observe the carousel.

Expected: Fragrance cards are displayed with the required fragrance information and action controls.
# TC-CAROUSEL-002
Carousel automatically transitions between cards.

REQ: CAROUSEL-002
Priority: Medium

Steps:
1. Navigate to the Featured Fragrances section.
2. Observe the currently displayed card.
3. Wait for the automatic transition.

Expected: The carousel automatically transitions to another fragrance card.
# TC-CAROUSEL-003
Navigation indicators select the corresponding carousel card.

REQ: CAROUSEL-002
Priority: Medium
Preconditions: At least three fragrance cards are available.

Steps:
1. Navigate to the Featured Fragrances section.
2. Select the third navigation indicator.
3. Observe the carousel.

Expected: The third fragrance card is displayed and the corresponding navigation indicator is active.
# TC-CAROUSEL-004
Carousel returns to the first card after the final card.

REQ: CAROUSEL-002
Priority: Medium

Steps:
1. Navigate to the final carousel card.
2. Wait for the next automatic transition.

Expected: The carousel returns to the first card.
# TC-CAROUSEL-005
Selecting a fragrance card opens its Product Details Page.

REQ: CAROUSEL-002
Priority: High

Steps:
1. Navigate to the Featured Fragrances section.
2. Select a fragrance card.

Expected: The corresponding Product Details Page is opened.
# TC-PDP-001
product details page adding to cart selected size product

REQ: PDP-002
Priority: High

steps:
1. select random fragrance and click on it's card
2. click on all available "containers" sizes (from 3ml to 100ml)

expected: should go to pdp and change price depending on size indicated.
# TC-PDP-002
product details page changing quantity with buttons

REQ: PDP-003
Priority: High

steps:
1. select random fragrance and click on it's card
2. click on 3ml bottle option
3. increase and deacrease quanity by +;- buttons in quantity section
4. go to 100ml
5. recreate step 3

expected: should increase/decrease quantity by 1 according to stock then must become unclickable button. 
# TC-PDP-003
product details page changing quantity with input

REQ: PDP-003
Priority: High

steps:
1. select random fragrance and click on it's card
2. click on all 3ml bottle option
3. in quantity bar indicate 0
4. in quantity bar indicate 2
4. in quantity bar indicate 999

expected: should not be able to write 0 (minimum 1), for 2 should indicate 2 and for 999 must change to highest possible number
# TC-PDP-004
flacon showcase page showing

REQ: PDP-003
Priority: low

steps:
1. select random fragrance and click on it's card
2. click "FLACON SHOWCASE"

expected: should redirect to flacon showcase page
# TC-PDP-005
flacon showcase page showing

REQ: PDP-003
Priority: low

steps:
1. select random fragrance and click on it's card
2. click random size in "containers" section
3. change to random quantity
4. click "add to cart"

expected: opens cart sidebar with added product (selected size and quantity)
# TC-COLLECTION-001
flacon showcase page showing

REQ: COLLECTION-004
Priority: medium

steps:
1. on navbar click collections
2. click random size in "containers" section
3. change to random quantity
4. click "add to cart"

expected: opens cart sidebar with added product (selected size and quantity)