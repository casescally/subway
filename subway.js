// We’re going to model a (fictional) subway line that will travel from Central Park to the Brooklyn Bridge. In subway.js create a new DoublyLinkedList named subway.

// 2.
// The subway starts at Central Park and winds its way downtown. In the following order:

// add 'TimesSquare' to the head of the list
// add 'GrandCentral' to the head of the list
// add 'CentralPark' to the head of the list
// Then print the list.

// 3.
// The subway continues from Times Square down to the Brooklyn Bridge. In the following order:

// Add 'PennStation' to the tail of the list
// Add 'WallStreet' to the tail of the list
// Add 'BrooklynBridge' to the tail of the list
// Then print the list again.

// 4.
// Oh no! There’s construction happening on the subway line: the Central Park and Brooklyn Bridge stops will temporarily be closed. Remove them from your list without iterating through the entire list.

// Then print the list again.

// 5.
// It turns out that the Times Square station is under construction as well. Remove it from the list, and then print the list for the last time.

const DoublyLinkedList = require("./DoublyLinkedList.js");

const subway = new DoublyLinkedList();

subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");
subway.printList();

subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData("TimesSquare");
subway.printList();
