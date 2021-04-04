'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "281f2a7b1646c3dea6feea25f04fa556",
"index.html": "6ebce9873ad77b1a8c18bc13a7df6819",
"/": "6ebce9873ad77b1a8c18bc13a7df6819",
"main.dart.js": "42d2659c40f74ba9824f33faf8a612c4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd6494b37022485e5afc7fd40db2392b",
".git/config": "b9aecfa81d9cbdbdeab127d0e9b97ba8",
".git/objects/95/7c39b15c53ccde13d186ba31ec86a25016b20b": "88a36cd9b6503bc6d4fa977427a7bee2",
".git/objects/95/858b777397847a280410399402697db39755c6": "7b17b6e8be296eece7bea874622fa4c2",
".git/objects/59/0a4c50e50300d6e596d1623adc4dddbc17a767": "b6de4107bf7d0fe7ff2c2e76e2d1b0e1",
".git/objects/3e/2a4d4ee04ab356979cbe33c48b58fac97dc369": "d2b2c0dd975320f1bf51a38820c4419b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/32035b7d3ec624f93601dfe411adaa9d1bd09d": "cfe435929926634a02dbd4f2f1aa47e9",
".git/objects/58/08ab0e1b16166435d1b0c9ea85ccd864b2110d": "d6e8faeeeee39039e2f63fb2d8e70b6c",
".git/objects/58/95866845cb5ca14b7911bc1ade7ee3f965f83c": "f9a69da8a9dd02a45fc4edbbf90fde1b",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/0b/d6a0d037d5dc4d077c82d18f4d5455ce1bc78b": "cf7d77425cef8ded25a699881b3fdbe6",
".git/objects/93/993e61864fafa45d0bbf4cb11396c5f642fbdc": "2d98e9454d80683f710eb43c7c66935d",
".git/objects/9d/711202df04537994b6da072119143380bf11ce": "2475a5080ead44f201d60b1786b20963",
".git/objects/9c/f2ba83cf95c15bacf12cdb17dc4c5796d19c98": "dd6747203c39b99bc882ccc530ed890a",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/02/4d9d7525ce276584738656a93c98dc841bf9e6": "aec685472f5434a387b4be853b0e7841",
".git/objects/d9/5f32f6a7f8dfc5b64b0257dc1499be88544c56": "0e54c9c266e6272327c5fe3cfbf6b0c2",
".git/objects/ad/df3293b43efbacb6717b07ab9e81563db2d42a": "e8a6878037d469abee9a60488ed12b41",
".git/objects/bb/d966181fc1d80418960d9ac8272826512f2243": "251dc8561b424ea374bcb3ea9d9937f9",
".git/objects/be/b3e7075b3e221912ddd36da555c646f42664df": "72785fc51e0a73ad195c6cbc591b962d",
".git/objects/b3/813256547d3258471d0a9424daac71e83e0d03": "7b0a4531f7048ad80704baacd0ce238e",
".git/objects/da/49d1e4f17918f08e399dc3e7e0b024bc161c55": "9da1d21d333d6a36a0bcae4ae4e266df",
".git/objects/d6/0a904c647fa49c7115fa316b2fa17f9903c2ad": "27c962ff30826f328cb1aace95844502",
".git/objects/d6/319d15a525ed1f96b0ebc4eb18d8cb662febc6": "daaef6146ba7cc9e2c7c10267ea4f4fc",
".git/objects/ae/5808a13894250a47339b193026dee369171d16": "7fc2e1f10874d3d1b603d12251d1d045",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/6fe0cb4c5c5ca2be98a3d829905d679a0885e1": "315c93be8c8a504ba26f2f308325715f",
".git/objects/ee/4e8eae0792a31fbb454d9602aa16676617519e": "05eea9581c8d9d52dbe7952bfb714fa8",
".git/objects/ee/386914edb81ec0cfee6657b2b791f5879c618c": "c9ca1035a6cba1b074771c0aa59905d2",
".git/objects/c9/12e7cc97271b9571359317b0e5616c898269e7": "e45ca480ff4b98f11e02aa2e7f8c2f63",
".git/objects/c9/276d252ec0ec51ebc5d75630d77f82665d3060": "10a7fd9c5fa38531b88c74a6d859d43a",
".git/objects/fd/40ca30c065d7568d0f74b7ab03cf6eb2c1d1c1": "0ca9cfc862444814974c67357e99dedf",
".git/objects/fd/835a7098c67b719083e24d318f0d6b47768704": "2bcf5ac368fe49ca39ea35193b66dec6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ca/1811384259bbe335d32287e6be8f00acd4b8e7": "cc63fc4ed8beea85e5c6926b63a29bae",
".git/objects/e4/54f317d5ce8034d6359dc8e25242b293a80d7f": "14bcf8cf1424dc89ceb7f4c76ebf3dad",
".git/objects/fe/8a0cb53b725378f23e53e164e11f97a666f6da": "52ee690f7b84302cb85244e3c4327e36",
".git/objects/c8/c973e2102c02190cdab55478bcf84544b33064": "3d83e70763b826ec98f8494099a1478d",
".git/objects/c8/8476d45196bb3911267ba76b927f2b9038cbde": "d3b7c79d0446defa56ca5cb29ef591d3",
".git/objects/ed/7e5e175fa389aa012525f03b6e91efddd819dc": "fe3f8a59312632247de1e323a765f01d",
".git/objects/c1/2ada060f7846cad107459479f4b2badbd3f5e1": "6d16bba4cf2d3612f2283237039bd4b3",
".git/objects/c1/a67d1f714f58fcdda9814d63c47026708e89db": "29060e6ba3c79782788192ae60e0a238",
".git/objects/ec/d298d0b2693cb3bb137529f7bfdb084d3fd655": "973990d3630e7162a26372dea212c295",
".git/objects/4e/f6f7a38788c9ed20d0a13b8ed4db6efe97d4c6": "c5cb814d36a4afe948a07133f38f5d5f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/a826124858fa047c6268f7cf92eb4235f8cf30": "f0dc9c6e715ad31de7e7b0bb75825674",
".git/objects/4b/4f1d97c647b796077f0cfc9f852f8994bf7222": "ea2f9f59e915386a6a607a0f1e6bafa2",
".git/objects/7c/d2b10a5251602b835455a4f47222e4c6ad76b0": "da14a92e6f9819f497524808ba8ed847",
".git/objects/16/786577dea5141a7b6ada02ee71c4305277093c": "6f44f450bbd66d6689208356469100e8",
".git/objects/89/a466a8dd06f257a55c250818f20b527ee2e27d": "b9e5be231d62ff737c157217a5ff586e",
".git/objects/89/9c76ec50000cbb36c0c8e03f594c883fd54395": "9a739ad0e7cfc835a9479077c700bfd6",
".git/objects/1f/159442268c82839ea379790b83f1c04a47348d": "1733d6dd5b04152c4f910679adfbc677",
".git/objects/74/37d3f244d5c8784c2ed5e2ab7d43af557f35bf": "ea60781fa26c10924f47b1b84a6ede02",
".git/objects/1a/f9c5dfa620a0ccf77b53330b79f5fc95528a2e": "7b62ff9157e3d517fbe753ebf3dfec9f",
".git/objects/1a/dd0ac42625f05b32863bf07817672eb370664f": "d7d56508f69d3b450c8c7cf7c4bf1b8f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ea4f0c3f47f243c76227ccdc68939f4de3a784": "451261bc29644f8b0594fa66d48f77d6",
".git/objects/10/b746ff12d068b80d09ddba2b38119b10ff176f": "03032313db5406d9523e2a877648b765",
".git/objects/10/70aacda9489240308493094defb23ce0d1bedc": "f471f76fbc5a741c3ee62d32e23609b3",
".git/objects/19/ae1704e7cd70586ecebea391fccb138a235808": "7b920f2b904c44f993cf9ec339b78705",
".git/objects/19/c643111812e0e3ae1289570ea76a21a1013f45": "df2860c7415653c00e55648bea233195",
".git/objects/21/bc00d422042a855d206f494d51066a742be850": "6fba2ae61548b6e1c279d509aa853198",
".git/objects/75/b1b1afaf75f788ede1a45d0409bce1bbe252cf": "0087d7c058ce7419a9038f7ca8e228c9",
".git/objects/86/3d550a46d259c07c38cd065d7cfb133e615418": "d16b9e90c8ca355839fbfafa5f2cb38c",
".git/objects/72/39b41a912a3940091e135a012b22d2bfc2ae1c": "8d67b173a91255ab26842ddbc065dc11",
".git/objects/2f/907ba8d924f427c0d643b771036c864c1227e7": "209e65a520d3da666ab32559aa114fa5",
".git/objects/2f/0f883b0fc9536c154a30cbc78583c4f203e2c5": "fc6ef1e1c680cf0373d1bd2e689969a6",
".git/objects/43/0cddfe87dfb14b82a1b3d2385d275b6ae527a7": "d74c3ce24a2f0eefd361b5ead51dffc1",
".git/objects/43/5acffa16968c79705732a40d91f45d19425d91": "750dd75cca5c1f72182e4168df95c946",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ce4bb3d80ea939913f5648eab2848a7a4c3104": "2c0caf21567dc4d4a1a05834c95fe7bc",
".git/objects/38/f30740091a07b081a235910abcf1aa226416b1": "bb6383327b680badd6575cf197fd147d",
".git/objects/65/d7523b38ef5faad346a7d91b8e6fd061c5f679": "d34612a1658f6b783175ac1ed990e566",
".git/objects/98/ce2cea9bd03a13b7ef36c1aa6518808b6324f3": "eb73e953d306438c8e9084bbe0937a52",
".git/objects/53/9b0b2ab81b609421fe63b337b8ca3f9148d10f": "6e8c1c55aeade05f20eaf2fde36202ed",
".git/objects/01/c4f04dd65181ef7b6529cd532137dbd6317796": "f9c165fcf1125a28d863f22d9e52b07b",
".git/objects/01/595b509c854cbb12bc0d36e8913ae458fc683b": "d06a5f888031b85341df6bef93fbf8d3",
".git/objects/6c/3d4130cd8225aae4d987fed2d5f06d03dcc456": "1ebb68ac5cff7e64877c188db4df2acd",
".git/objects/39/ae4f772af1b69f57b09eba0881f431d9022327": "ac8f189e8eeca9d3aed424c410548c0f",
".git/objects/55/19a241d1b15a575e63c83531f84c0ca6d62d62": "0c95afba39040ed5224eafc1046f90a6",
".git/objects/bf/68623af94d64d0785a6d76ce19c53e9490a2f2": "1d63bcadadc6b75264b939136154621f",
".git/objects/b1/14654aa3ad73a2e9240fc9df5881e965d66d57": "3e3a6546324ca76f009efb8c93881ead",
".git/objects/dd/7b6a80e33ce676d3de366a942545265f44f380": "620a6b8b5c9d64af20bd5e9ccfde52c3",
".git/objects/b6/ac4418c6b265c3ae5ebd2a6b7bc8df561da5df": "91b480ffe9af901e2a2f391013e6045d",
".git/objects/a9/43a5de81cf0b2dbee91f642e1e21f0a762b0a2": "ad170b318334caf1aaa7e9694645e2cf",
".git/objects/aa/5bb8f4fc228c1d5dd19b2d43dd62cba470aeec": "2c9f2951d26d7e6f0f063a3530a08518",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4958fa19073351a895463b2a03b2e3c8c0b9ce": "c97b3993a347529315e06ac954aa6944",
".git/objects/b7/4382668a4024ba5c05220e9d0c47c35e3cb944": "d0a495fbdce57d055d9a9dee95756029",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/db/9904ae390160c79f515bbe929dc3efb4b40e5c": "7ca8f4efa9d511879e9a8d8950d3c038",
".git/objects/a8/c3b2e2c026847ae99bed7a118ded418a019ff7": "886240674e9d8914dd08a6dc7f7e50c6",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/d5d99534fc4e85cf83b2bc36ccb46620407184": "c57f9b50c893981573aafa888bc6f0c2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/7c77797ce973fcdd595ac98f3ad05114639a15": "90948ed2c442215193de5cbb05245913",
".git/objects/ea/cf1f9bd0ebe6e33e3af781b7d3b6a1711128b8": "4aaea3b049f1ea979e7097d15946395d",
".git/objects/ea/1225375c8b4d38ddd527a24f0e92285421c8a0": "1f5b7aad2afbabe13b0af899aa1474d4",
".git/objects/e1/fbf7b66fc22237167a9d151b45848eed98fcc5": "78a284f830b68cbe67da4d5f189475f8",
".git/objects/f7/f47c93c893b6b849922f174b6e922e239d3791": "f140f9f9770476a9de977a734494608a",
".git/objects/e8/c2e5c588393083e19c6d951d08f700db49d188": "e1039fe688c787eae00bd3adde7ce5c3",
".git/objects/e8/5b6876088df8a10bcfb8db8605e1f0b587bf3f": "9208aaa0a53493961314ca17d8393155",
".git/objects/e8/db73ceb368c2057227f00c2d29490b6d21213a": "2ee6ea90aa7dbe1d3de93c981dee4767",
".git/objects/ff/be9ea094fc6c44a0362e6d97bec5b517a84dd5": "d50ac721387face0a7a3e3a5ffa291bc",
".git/objects/f6/c24f329618a88588057d818a0f087b1e381715": "cfe86b5dc912859d2a98e37123271ca2",
".git/objects/f8/f43325af60c4a229d0c0ab2fb40279708c8687": "cb6b7d1b2840fc7df3fb0e5e0dcd4fdc",
".git/objects/e0/797b6ba6d95ab7e44412166210b14dbd79a769": "23cf878e20a9b2726a5ef1a4850e3ebc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/1f22261c1c6c98103213da23b8cf6a2b6eac91": "4bc357c05bd1335707403f4ce13571fc",
".git/objects/79/d3826ab255fa42ca8203d567cbba894f8a29a9": "166913a8411794f3d364fac1913e29b5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/3f9b0914ce3f1577da27ce369b439e7b891c30": "ff0a225ee83451d8cd14349a12ddb95d",
".git/objects/1b/503c6829a2c4134424dc3275598cfe12627943": "a81e39aec400f8ca07ae1f35a04423ce",
".git/objects/48/31283ac0b0f9b597339c346ad1c6b04c575587": "6d3e4277d819bbb08135cab5fe948d4b",
".git/objects/70/748529d4bfcfe95800ea474f84d75a2632ba73": "cf139c9d72385e1f64d4f34eb3f42a57",
".git/objects/1e/6ad90d06bd60737aa53a06ec6a651ab2c036e9": "5edf3494e08b1c647824f1877b3c0439",
".git/objects/4a/20c33ae780c4a6561021808eab764f3ccd9ec9": "ea4272010de4b43490235f7f657537d4",
".git/objects/4a/60627c56e8e90947a0361aabe0aefcc7e21455": "244d9d49318daa4dfcca111a30b6870c",
".git/objects/12/22bdf9607d24a805080cf937a98ee1bef7e196": "260304034b913dddfd26df799f0c3a13",
".git/objects/1d/0e70e5f8c2a5e9951cd738028fc1fdd08cf2ef": "aee3ab0d474fb982b126d74a5d249e5d",
".git/objects/1c/0a2fec0639cc81b17e1cf65845105bc8f75f51": "a7000d7b962a3d6b48c3488375e1037d",
".git/objects/82/56b7493f6121e00da21673e3bab5df6976f167": "d6d201a162927391e9d2efa39d577cf2",
".git/objects/40/d8a2066ae734fde916de492f5ba9bf760884fa": "93ebe018ca33ab838774b65141826e1b",
".git/objects/78/fc877f5d1b2eec2fd6839471925be47e04b130": "2632fbe19ec4e2079af2d78e20cd7eef",
".git/objects/7f/3d8ada5a1385ad8f5f9e6f85d41048d0e8e6c7": "c0a393d12a4a43902a435601318a4151",
".git/objects/25/0f042cb99f787dfa3e960123ff5ad286395410": "70935af209bed948f7d9d09ac700f8a7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1474903337af3f5e4d3f41752cffc5a8",
".git/logs/refs/heads/master": "1474903337af3f5e4d3f41752cffc5a8",
".git/logs/refs/remotes/origin/master": "82a0aa169a306274dab9c21612f81203",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "95fde6156a454269474315f5f856dceb",
".git/refs/remotes/origin/master": "95fde6156a454269474315f5f856dceb",
".git/index": "0933ff0b04871614fdda44ff88de9459",
".git/COMMIT_EDITMSG": "ed93c4146a1b13564a42611e96b9f389",
"assets/AssetManifest.json": "ed316cadfc95d54d542d39069c0b1bef",
"assets/NOTICES": "ca23d49d68cac86db4e92425953390df",
"assets/FontManifest.json": "59cc2039fdec1d5cd5fbda600d0e8fd7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/the_smokey_collar.png": "8b5ae9216a6900aa4d6bd65dc3793840",
"assets/assets/the_geometric_bowl.png": "7e8f017505f572375bde2d27c9add2ce",
"assets/assets/the_mouse_rope_toy.png": "736989d0b3020ebd90d0578c16808497",
"assets/assets/the_brinjal_rope_toy.png": "a9b81288e0b31ae98273ac5c77d16567",
"assets/assets/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/assets/the_fur_bulous_polo.png": "4abdd950600233fe3ed70eff5a186537",
"assets/assets/the_pupcorn_hoodie.png": "35d371e735f36bee43306df7ea650633",
"assets/assets/the_pawpstar_bowl.png": "cf5ffe9a42843eb86908f489dfc7ff5e",
"assets/assets/the_ultimutt_tee.png": "ce7851f1cdba44bcbd896913a42e6f50",
"assets/assets/the_swirly_collar.png": "1d07b7c1856b82b4dfe7e3320e1e6bcc",
"assets/assets/the_sky_leash.png": "8fb9ea85019300b3a1903350b565ae92",
"assets/assets/the_minion_collar.png": "448c6b734583a929d92a63158a42df51",
"assets/assets/the_pawrty_jacket.png": "501165b7d7c0e926f31f7a94fee78028",
"assets/assets/the_bark_side_collar.png": "9954c445e9e34c6e2508ffd599e80d4d",
"assets/assets/the_bumble_bee_harness.png": "844667de7db977988004321fdc4530ed",
"assets/assets/the_green_tee.png": "e581bdc94af1f930bb84c834d3dfba54",
"assets/assets/the_sunrise_lounger.png": "e1390ac37bd0e579f1c68af08e06342e",
"assets/assets/the_bear_rope_toy.png": "d30acf2f0cfa410cfb9cb93103542149",
"assets/assets/the_ocean_collar.png": "2ed09399a19fe20dabcd66a5357568e5",
"assets/assets/the_candy_bar_bed.png": "a5755a190b77f185c8ae062c85824e1d",
"assets/assets/the_pupparazzi_harness.png": "e72df1f1933349d0050c696ba85637a3",
"assets/assets/the_marble_leash.png": "ccd3a881b045a270dbbe54ac53593c83",
"assets/assets/the_foliage_lounger.png": "c5e0d7f1b84565824ccaf8a5d07afb7e",
"assets/assets/the_howloween_hoodie.png": "eb1f3297e4fca3e96ba14c771f056719",
"assets/assets/the_scarlet_lounger.png": "0edb4ea0da9103e5273b05b009df26f4",
"assets/assets/the_sunshine_bone_plushie.png": "528f0cb21e1547d9631a1a712c44e7cc",
"assets/assets/the_mango_bone_plushie.png": "c7bba9fcdb8ff2fd115137e643461d04",
"assets/assets/the_fur_bulous_collar.png": "edbe8ec7dcbe90e2ebe0b2b68b85275f",
"assets/assets/the_rope_chew_ball.png": "79cb3b4fe93995e3933262115e4d74b6",
"assets/assets/the_periwinkle_perfume_toy.png": "0dfb9eec4cfafb2e4758d9261e16cf64",
"assets/assets/the_bubbly_leash.png": "d81c86c5ab9a8fb03ae75d3c1f50eaa1",
"assets/assets/the_marble_collar.png": "fb976ac798a24b64adc5908d2c7a0584",
"assets/assets/the_red_leash.png": "194b53a63bc5af8353eabae07bd1a817",
"assets/assets/Kalam-Bold.ttf": "d2b743d0b05c1b3a693e7de8ba3bcd74",
"assets/assets/the_abstract_leash.png": "98b745c639c2fb71e2e83d0b0b9b4b62",
"assets/assets/the_cor_geous_hoodie.png": "2bc218315018ea06088b918479c249c8",
"assets/assets/the_octopaws_rope_toy.png": "5d88a02b7fbaf356c058e5b9cb23a3f5",
"assets/assets/the_pretty_collar.png": "87a539e7a79208792fe0c9ae5597f99f",
"assets/assets/the_minion_harness.png": "0fb70dd53782b2b873ef42974b43b470",
"assets/assets/the_twilight_lounger.png": "9edea49ea41b3d09767f2f2fe2f5cfbd",
"assets/assets/the_swirly_bowl.png": "748a270af843402827b5b967ba6c84b4",
"assets/assets/the_pug_life_jacket.png": "b5c1d180c3ee5a6cd7ea7ce1b96a9f55",
"assets/assets/the_ruff_polo.png": "3a6aa890046fbf17d5a0b4dc3257a42d",
"assets/assets/the_marine_lounger.png": "7a97db33e60e000af58542cbe431399c",
"assets/assets/the_saucer_bed.png": "74a9a539a85688c569e33a669afae69e",
"assets/assets/the_ladybird_harness.png": "2f056d992f59137c2446fdcfe9cfedc3",
"assets/assets/the_midnight_pawrty_bottle.png": "d8239f3dcaf028011a0e343888cb7052",
"assets/assets/the_cotton_candy_leash.png": "2c2b1f998086f591da83f19fea5c57e3",
"assets/assets/the_purple_pawrty_bottle.png": "2d19be3f38c36de23596daa64c79e9d5",
"assets/assets/the_abstract_collar.png": "86d201e7c2f5c18dafe40b4fa7dd784d",
"assets/assets/the_space_lounger.png": "0e30a56869bd8e4df2228e1c07ed3dbb",
"assets/assets/the_pup_chew_toy.png": "42b9787a1c5fc9b5170120f537e3a89c",
"assets/assets/the_pupkin_tee.png": "339c0d5755882b6ed40ccfd653bec695",
"assets/assets/the_pawpstar_co_leash.png": "619e31960ad993b4f2a5ba2212733a99",
"assets/assets/the_bubble_bowl.png": "f5cf7203379879b42f6e2e6ad203797d",
"assets/assets/the_grey_hoodie.png": "fb34db3b4e9d4ffd5660890ebc46897c",
"assets/assets/the_maple_collar.png": "416b691cd19790b55b2ec3466a47564a",
"assets/assets/the_aqua_lounger.png": "af4c684f55125c518f7675c2ec8dc95f",
"assets/assets/the_shoe_chew_toy.png": "ac87f76adf403296d51f1a2666602620",
"assets/assets/the_dumbbell_rope_toy.png": "ee02ce6d62ccb7b5fabe07970de1af7a",
"assets/assets/the_aqua_leash.png": "9a7598e2e316dac916a8fc3c7a887bc6",
"assets/assets/the_swirly_leash.png": "5c83e7c11c153eec6d8d7429f8121746",
"assets/assets/the_gangsta_hoodie.png": "6c8ac40e355e2b6320203356220e824f",
"assets/assets/the_airplane_chew_toy.png": "1ff09c4521f22898ca241e818670ae49",
"assets/assets/the_fries_chew_toy.png": "aa24857e2d261819a4d1ad97e30b783b",
"assets/assets/the_bubbly_collar.png": "471f33eef463d1954f2de6389510ad92",
"assets/assets/the_loop_rope_toy.png": "1a44da6feb8e57fd78967fc84a5ad4a5",
"assets/assets/the_pup_ular_polo.png": "2da793a7571daf17aef403f7337465e8",
"assets/assets/the_cotton_candy_perfume_toy.png": "30e253fa80d5c58f458451668b0b48dc",
"assets/assets/whatsapp.png": "3a8dad7f872542a95103cb9ca74dc415",
"assets/assets/the_blueberry_leash.png": "fc4490636ee3ee8d93bd71701b7d0698",
"assets/assets/the_boy_rope_toy.png": "dac2df3b8776fbcd95492cb6ae849a1f",
"assets/assets/the_tug_rope_toy.png": "f8337deae9f16b9ebd9319ba3435e4e7",
"assets/assets/the_fire_collar.png": "af171cfbeed4f6abf14ef36435fa4e6b",
"assets/assets/the_blaze_lounger.png": "3fbd8eab8d079a5705e85b3be682cdc6",
"assets/assets/the_peach_collar.png": "f1fe01ba858e3ee9874fb7a01fdc5da2",
"assets/assets/the_arc_bed.png": "d0b67d82ec44b18fe6646f62f666c07c",
"assets/assets/the_cat_rope_toy.png": "0c6372b2da49465a8718714157439b01",
"assets/assets/the_snow_leash.png": "f3dcc76e7877f81212745913ec066b46",
"assets/assets/the_purple_leash.png": "8f336dc09188d63892af968c51f07e30",
"assets/assets/the_pawsperity_jacket.png": "3936f1f48b88ec88a43f6edbcbb23f56"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
