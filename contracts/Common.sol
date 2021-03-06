//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ICurio20.sol";
import "./IERC1155.sol";

// Simple contract to use as base for const vals
contract CommonConstants {
    constructor() {
        // 8 sets:
        // [0] (ID 301) story set
        // [1] (ID 302) cryptograffiti set
        // [2] (ID 303) phneep set
        // [3] (ID 304) cryptopop set
        // [4] (ID 305) robek set
        // [5] (ID 306) daniel friedman set
        // [6] (ID 307) marisol vengas set
        // [7] (ID 308) full set
        uint256[] memory storySet = new uint256[](10);
        for (uint256 i = 0; i < 10; i++) {
            storySet[i] = i + 1;
        }
        cardSets.push(storySet);

        uint256[] memory cryptograffitiSet = new uint256[](3);
        cryptograffitiSet[0] = 11;
        cryptograffitiSet[1] = 12;
        cryptograffitiSet[2] = 13;
        cardSets.push(cryptograffitiSet);

        uint256[] memory phneepSet = new uint256[](3);
        phneepSet[0] = 14;
        phneepSet[1] = 15;
        phneepSet[2] = 16;
        cardSets.push(phneepSet);

        uint256[] memory cryptopopSet = new uint256[](3);
        cryptopopSet[0] = 17;
        cryptopopSet[1] = 18;
        cryptopopSet[2] = 19;
        cardSets.push(cryptopopSet);

        uint256[] memory robekSet = new uint256[](3);
        robekSet[0] = 21;
        robekSet[1] = 22;
        robekSet[2] = 23;
        cardSets.push(robekSet);

        uint256[] memory danielSet = new uint256[](3);
        danielSet[0] = 24;
        danielSet[1] = 25;
        danielSet[2] = 26;
        cardSets.push(danielSet);

        uint256[] memory marisolSet = new uint256[](3);
        marisolSet[0] = 27;
        marisolSet[1] = 28;
        marisolSet[2] = 29;
        cardSets.push(marisolSet);

        uint256[] memory fullSet = new uint256[](30);
        for (uint256 i = 0; i < 30; i++) {
            fullSet[i] = i + 1;
        }
        cardSets.push(fullSet);
    }

    uint256[][] cardSets;

    IERC1155 curioWrapperContract = IERC1155(0x73DA73EF3a6982109c4d5BDb0dB9dd3E3783f313);

    ICurio20[] unwrappedCards = [
        ICurio20(0x6Aa2044C7A0f9e2758EdAE97247B03a0D7e73d6c), //cro1
        ICurio20(0xE9A6A26598B05dB855483fF5eCc5f1d0C81140c8), //cro2
        ICurio20(0x3f8131B6E62472CEea9cb8Aa67d87425248a3702), //cro3
        ICurio20(0x4F1694be039e447B729ab11653304232Ae143C69), //cro4
        ICurio20(0x5a3D4A8575a688b53E8b270b5C1f26fd63065219), //cro5
        ICurio20(0x1Ca6AC0Ce771094F0F8a383D46BF3acC9a5BF27f), //cro6
        ICurio20(0x2647bd8777e0C66819D74aB3479372eA690912c3), //cro7
        ICurio20(0x2FCE2713a561bB019BC5A110BE0A19d10581ee9e), //cro8
        ICurio20(0xbf4Cc966F1e726087c5C55aac374E687000d4d45), //cro9
        ICurio20(0x72b34d637C0d14acE58359Ef1bF472E4b4c57125), //cro10
        ICurio20(0xb36c87F1f1539c5FC6f6e7b1C632e1840C9B66b4), //cro11
        ICurio20(0xD15af10A258432e7227367499E785C3532b50271), //cro12
        ICurio20(0x2d922712f5e99428c65b44f09Ea389373d185bB3), //cro13
        ICurio20(0x0565ac44e5119a3224b897De761a46A92aA28ae8), //cro14
        ICurio20(0xdb7F262237Ad8acca8922aA2c693a34D0d13e8fe), //cro15
        ICurio20(0x1b63532CcB1FeE0595c7fe2Cb35cFD70ddF862Cd), //cro16
        ICurio20(0xF59536290906F204C3c7918D40C1Cc5f99643d0B), //cro17
        ICurio20(0xA507D9d28bbca54cBCfFad4BB770C2EA0519F4F0), //cro18
        ICurio20(0xf26BC97Aa8AFE176e275Cf3b08c363f09De371fA), //cro19
        ICurio20(0xD0ec99E99cE22f2487283A087614AEe37F6B1283), //cro20
        ICurio20(0xB7A5a84Ff90e8Ef91250fB56c50a7bB92a6306EE), //cro21
        ICurio20(0x148fF761D16632da89F3D30eF3dFE34bc50CA765), //cro22
        ICurio20(0xCDE7185B5C3Ed9eA68605a960F6653AA1a5b5C6C), //cro23
        ICurio20(0xE67dad99c44547B54367E3e60fc251fC45a145C6), //cro24
        ICurio20(0xC7f60C2b1DBDfd511685501EDEb05C4194D67018), //cro25
        ICurio20(0x1cB5BF4Be53eb141B56f7E4Bb36345a353B5488c), //cro26
        ICurio20(0xFb9F3fa2502d01d43167A0A6E80bE03171DF407E), //cro27
        ICurio20(0x59D190e8A2583C67E62eEc8dA5EA7f050d8BF27e), //cro28
        ICurio20(0xD3540bCD9c2819771F9D765Edc189cBD915FEAbd), //cro29
        ICurio20(0x7F5B230Dc580d1e67DF6eD30dEe82684dD113D1F) //cro30
        // , ICurio20(0xE0B5E6F32d657e0e18d4B3E801EBC76a5959e123) //cro17b
    ];
}
