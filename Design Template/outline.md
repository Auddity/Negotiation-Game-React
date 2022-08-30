# Negotiation Game - REACT
Based on Forge Of Empires mini game.

# Landing Page
~~- A Title Welcoming player to game.~~
~~- A Custom Radio to select difficulty.~~
- A Button to Start Game.
  ## Button Action
    - Depending on Radio input selection game parameters are loaded [Difficulty Setting](#difficulty-setting)
    ~~- Brings up [Game Container](#outer-container)~~
    ~~- Negotiators Portraits from API [On Game Start](#on-game-start)~~
- Possibly a Header with a horizontal list of goods and starting quantity.

# Game Displays UI

## Outer Container
### Display:
1) The initial game display has an **Outer** box container.
  - Inside is a contianer box which holds **Five Columns** and a *Turns Remaining Counter*
  - Also inside as a **PayButton**

2) Also in this Outer Container is a **Pay & Negotiate Button**
  ~~- Upon first load the button is *Grayed Out*~~
  - Is colored in once ALL five Offers have been selected [Offer Buttons Action](#offer-button-action)
  ### P&N Button Action:
  When Clicked:
  - The offered goods move into the Column Left of the Portrait.
  - In UX the cost is deducted from the total goods [Goods Payment](#resource-quantity-removed-after-payment)
  #### Post Click Display
    - **IF** Offer is *Incorrect* the Background of the good in the left column becomes Red
      - The Select Resource Button Remains
    - **IF** Offer is *Correct* the Background of the good in the left column becomes Green
      - A Checkmakr replaces the Select Resource Button
    - **IF** Offer is for the *Wrong Person* the Background remains Yellow.
      - The Select Resource Button Remains
  - In conjunction with the above actions, text stating each status appears between the column/portrait and the Buttons.
  - Also the **Turns Left** display is reduced by 1

## Inner Container (Five Columns)
### Display (Each of the Five Columns)
1) A top two thirds (2/3) 
  - A half circle to the right of the above column which holds a portrait.
  - Holds a column on the left side which stores previously selected goods.
    ### Action on Column:
    - Occurs *After* the **Pay & Negotiate Button** is pressed.

2) A bottom one third (1/3)
  - A Select Resources Button
    ### Button Action:
      - When Clicked a modal pops up which is populated with **Offer Buttons**

## Offer Buttons Modal
  ### Display:
    - On Top: Text that says "Select A Resource To Offer"
    - 3 - 10 (depending on difficulty) boxes/buttons (Offer Button) which have a picture of the good and a quantity to pay / quantity in stock display.
### Offer Button Action: 
- When Clicked:
- The **Offer Buttons Modal** dissapears.
- The good appears in the Original **Select Resource Button** 

Selecting a Good to offer is repeated five times to fill the negotiation board
- Then the **Pay & Negotiate** button is colored in.
[Pay & Negotiate Button Action](#pn-button-action)


## Pay & Negotiate is Clicked
[Post Click](#post-click-display)
[Game Operation](#resource-quantity-removed-after-payment)

This Operation is Repeated Until the Turns run out. **IF** not successful a modal pops up saying 'You failed! You chose poorly' **Else** a modal pops up saying 'Success! You chose wisely' (With a pic of the Templar Knight from IJ&TLC)


# Game Operations

## Initial Needs
- A main pool of at least 10 Goods
- API for portraits.

## On Game Start
- Get 5 portraits from API to display
- Grab number of goods from pool (depending on difficulty)
  - Assign 1 good from this 'game' pool to each negotiator(portrait)

## Difficulty Setting
- Easy 
  - 3 Turns
  - 2-3 Good Cost
  - Get 3-4 Random goods from pool
- Moderate 
  - 3 Turns
  - 4-5 Good Cost
  - Get 5-6 Random goods from pool
- Difficult 
  - 4 Turns
  - 6-7 Good Cost
  - Get 7-10 Random goods from pool

## Resource Quantity Start
Starting Pool
- Not sure yet

## Resource Quantity Removed after Payment
- The cost of the good is removed from the Starting Pool

## Determine if Good Selections Status
  - Correct
  - Incorrect
  - Wrong Person