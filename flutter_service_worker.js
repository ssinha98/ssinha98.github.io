'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "281f2a7b1646c3dea6feea25f04fa556",
"index.html": "a83053edff9f739210d066d2bc125fbd",
"/": "a83053edff9f739210d066d2bc125fbd",
"main.dart.js": "51d7f106bf70966cc96631275475d265",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd6494b37022485e5afc7fd40db2392b",
".git/config": "b9aecfa81d9cbdbdeab127d0e9b97ba8",
".git/objects/95/7c39b15c53ccde13d186ba31ec86a25016b20b": "88a36cd9b6503bc6d4fa977427a7bee2",
".git/objects/95/858b777397847a280410399402697db39755c6": "7b17b6e8be296eece7bea874622fa4c2",
".git/objects/59/0a4c50e50300d6e596d1623adc4dddbc17a767": "b6de4107bf7d0fe7ff2c2e76e2d1b0e1",
".git/objects/3e/2a4d4ee04ab356979cbe33c48b58fac97dc369": "d2b2c0dd975320f1bf51a38820c4419b",
".git/objects/50/8e69bd07d35f967426ad3b9060f3396efaf7e9": "6309c2f887048f6cab7c78ebe78409af",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/32035b7d3ec624f93601dfe411adaa9d1bd09d": "cfe435929926634a02dbd4f2f1aa47e9",
".git/objects/04/db265825eb1fe9b65197c074f7a9ed147230fb": "c0f891a20b5155e1380e180a7ae7950d",
".git/objects/56/47ffe2467120767f4fe85c897b60f00f490d7d": "9642866f774cfb36fafcc2185041e11f",
".git/objects/56/6a8c8102bd9436be6bacf976be0c025254eb4c": "841d91d821e52f97ba05b7875f8aee53",
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
".git/objects/d0/474ae4813fe3b932071804b468cf1c86467a08": "17b24669c5cb925977fbfe92cb280ab8",
".git/objects/be/b3e7075b3e221912ddd36da555c646f42664df": "72785fc51e0a73ad195c6cbc591b962d",
".git/objects/b3/813256547d3258471d0a9424daac71e83e0d03": "7b0a4531f7048ad80704baacd0ce238e",
".git/objects/da/49d1e4f17918f08e399dc3e7e0b024bc161c55": "9da1d21d333d6a36a0bcae4ae4e266df",
".git/objects/b4/70ebd96f1d70646fa313bbe8bc93e907bf8de1": "5076fd66b5774a9d60ef09c8db94a901",
".git/objects/a5/a46fcc2d85af799a734dd1e6ab84de25d7f434": "0854f34b5a0ef03b6a6769cdf5732f36",
".git/objects/d6/0a904c647fa49c7115fa316b2fa17f9903c2ad": "27c962ff30826f328cb1aace95844502",
".git/objects/d6/319d15a525ed1f96b0ebc4eb18d8cb662febc6": "daaef6146ba7cc9e2c7c10267ea4f4fc",
".git/objects/ae/5808a13894250a47339b193026dee369171d16": "7fc2e1f10874d3d1b603d12251d1d045",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/b7abb3f473bbccb7b9a3c5fef2865d3e9a4770": "a6df3e8077eca4e1b1412fa2a9d3ef7b",
".git/objects/c7/6fe0cb4c5c5ca2be98a3d829905d679a0885e1": "315c93be8c8a504ba26f2f308325715f",
".git/objects/ee/4e8eae0792a31fbb454d9602aa16676617519e": "05eea9581c8d9d52dbe7952bfb714fa8",
".git/objects/ee/386914edb81ec0cfee6657b2b791f5879c618c": "c9ca1035a6cba1b074771c0aa59905d2",
".git/objects/c9/12e7cc97271b9571359317b0e5616c898269e7": "e45ca480ff4b98f11e02aa2e7f8c2f63",
".git/objects/c9/276d252ec0ec51ebc5d75630d77f82665d3060": "10a7fd9c5fa38531b88c74a6d859d43a",
".git/objects/fc/7d4583c9d391432889f71f0a5a9eb28d4cc020": "872d5e1bc53c159282b7d467dbe0cba8",
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
".git/objects/27/3d7ebcfd82cce65aeac80866f34b11d5fbb816": "64ea5d80a78d2c4b6ee26ef42f7fdbf3",
".git/objects/4b/a826124858fa047c6268f7cf92eb4235f8cf30": "f0dc9c6e715ad31de7e7b0bb75825674",
".git/objects/4b/4f1d97c647b796077f0cfc9f852f8994bf7222": "ea2f9f59e915386a6a607a0f1e6bafa2",
".git/objects/29/3a91b389f6e3d28e371bb2fb5d07beeb882ed7": "03b501639263b52dcdb55b58ad2fe152",
".git/objects/7c/f16a66c0a7a9ec61bef0a59cbdcb0816c580a4": "e8798520c3ff3f06e9b62c33dce964e3",
".git/objects/7c/d2b10a5251602b835455a4f47222e4c6ad76b0": "da14a92e6f9819f497524808ba8ed847",
".git/objects/16/786577dea5141a7b6ada02ee71c4305277093c": "6f44f450bbd66d6689208356469100e8",
".git/objects/89/a466a8dd06f257a55c250818f20b527ee2e27d": "b9e5be231d62ff737c157217a5ff586e",
".git/objects/89/9c76ec50000cbb36c0c8e03f594c883fd54395": "9a739ad0e7cfc835a9479077c700bfd6",
".git/objects/1f/159442268c82839ea379790b83f1c04a47348d": "1733d6dd5b04152c4f910679adfbc677",
".git/objects/73/6429b320dbb14a21deb9acd6962cbb80add31c": "317c44eec4d3888f27c2999f289e823f",
".git/objects/74/37d3f244d5c8784c2ed5e2ab7d43af557f35bf": "ea60781fa26c10924f47b1b84a6ede02",
".git/objects/1a/f9c5dfa620a0ccf77b53330b79f5fc95528a2e": "7b62ff9157e3d517fbe753ebf3dfec9f",
".git/objects/1a/dd0ac42625f05b32863bf07817672eb370664f": "d7d56508f69d3b450c8c7cf7c4bf1b8f",
".git/objects/8f/98cf5e4231bdcb808852c77e5ed3abf5d43621": "a7838a21d82c405ff1c77b540f591eb4",
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
".git/objects/43/63088fac96312972a3f1028f019c7dfc27a9ef": "3c61d0aa81d050165860c16057dfe6f4",
".git/objects/43/0cddfe87dfb14b82a1b3d2385d275b6ae527a7": "d74c3ce24a2f0eefd361b5ead51dffc1",
".git/objects/43/5acffa16968c79705732a40d91f45d19425d91": "750dd75cca5c1f72182e4168df95c946",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ce4bb3d80ea939913f5648eab2848a7a4c3104": "2c0caf21567dc4d4a1a05834c95fe7bc",
".git/objects/38/f30740091a07b081a235910abcf1aa226416b1": "bb6383327b680badd6575cf197fd147d",
".git/objects/36/66bf0d7011b700d3adcafb71ccc59ac9a25761": "b16ae0a60baab4056afc1a4ed6386c1f",
".git/objects/65/d7523b38ef5faad346a7d91b8e6fd061c5f679": "d34612a1658f6b783175ac1ed990e566",
".git/objects/98/ce2cea9bd03a13b7ef36c1aa6518808b6324f3": "eb73e953d306438c8e9084bbe0937a52",
".git/objects/53/9b0b2ab81b609421fe63b337b8ca3f9148d10f": "6e8c1c55aeade05f20eaf2fde36202ed",
".git/objects/01/c4f04dd65181ef7b6529cd532137dbd6317796": "f9c165fcf1125a28d863f22d9e52b07b",
".git/objects/01/595b509c854cbb12bc0d36e8913ae458fc683b": "d06a5f888031b85341df6bef93fbf8d3",
".git/objects/6c/3d4130cd8225aae4d987fed2d5f06d03dcc456": "1ebb68ac5cff7e64877c188db4df2acd",
".git/objects/39/ae4f772af1b69f57b09eba0881f431d9022327": "ac8f189e8eeca9d3aed424c410548c0f",
".git/objects/55/19a241d1b15a575e63c83531f84c0ca6d62d62": "0c95afba39040ed5224eafc1046f90a6",
".git/objects/bf/68623af94d64d0785a6d76ce19c53e9490a2f2": "1d63bcadadc6b75264b939136154621f",
".git/objects/a0/dc609a7c92c9769c185708b3243f53569e7873": "f9a54fd75216fc10859cf663d44a8a52",
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
".git/objects/e1/ba03a6622e2e68c697dc35280167766be0913f": "7dcc1e2fe39836b06b0ba9ac8c503087",
".git/objects/f7/43e183149995b7744e45b3abc811979fd9f470": "1c3a7be876a9e0c21ff18ce6f1a98e9d",
".git/objects/f7/f47c93c893b6b849922f174b6e922e239d3791": "f140f9f9770476a9de977a734494608a",
".git/objects/e8/c2e5c588393083e19c6d951d08f700db49d188": "e1039fe688c787eae00bd3adde7ce5c3",
".git/objects/e8/5b6876088df8a10bcfb8db8605e1f0b587bf3f": "9208aaa0a53493961314ca17d8393155",
".git/objects/e8/db73ceb368c2057227f00c2d29490b6d21213a": "2ee6ea90aa7dbe1d3de93c981dee4767",
".git/objects/ff/be9ea094fc6c44a0362e6d97bec5b517a84dd5": "d50ac721387face0a7a3e3a5ffa291bc",
".git/objects/ff/97b862c61e252492a9c5a2b272e0df047e0833": "875b07ffac5d0d8450abb87b63353bdf",
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
".git/objects/4a/561dddaf644fc94cc84d32979a93e997e495f9": "a98d862adb39f160a99ee310b62919fe",
".git/objects/4a/20c33ae780c4a6561021808eab764f3ccd9ec9": "ea4272010de4b43490235f7f657537d4",
".git/objects/4a/60627c56e8e90947a0361aabe0aefcc7e21455": "244d9d49318daa4dfcca111a30b6870c",
".git/objects/4f/0dc94e25792a76a987fdeeebf68e2f192bcf9f": "96d0ee82c45a773eb6ac23816c020fba",
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
".git/logs/HEAD": "d65d99f364d26c8a23d7e75dd681d8c0",
".git/logs/refs/heads/master": "d65d99f364d26c8a23d7e75dd681d8c0",
".git/logs/refs/remotes/origin/master": "fda2428419f6d79dc0110a47889d0b6b",
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
".git/refs/heads/master": "b203dbe14b4150059da6bb524180656c",
".git/refs/remotes/origin/master": "b203dbe14b4150059da6bb524180656c",
".git/index": "8fcb3860f49fb742912dd26f436335a6",
".git/COMMIT_EDITMSG": "c139a92d3d92aeb669847280b05e6e20",
"assets/AssetManifest.json": "b80ec62dc15f42583a13d9067eb14c7a",
"assets/NOTICES": "e3996edd88cba7df24edfbe263c96fb8",
"assets/FontManifest.json": "59cc2039fdec1d5cd5fbda600d0e8fd7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/pink9.png": "876cdb5c286efa29f10eb1dd682a0033",
"assets/assets/pink8.png": "5ca039d6ffaa5f49f2c482ed913da5f0",
"assets/assets/lime10.png": "957f7d091fc166809a79b41773f8a84f",
"assets/assets/light_blue8.png": "760df21cd169105665123d4a2d30a8ca",
"assets/assets/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/assets/light_blue9.png": "d2214eaabeedd16269350b27336b9e45",
"assets/assets/light_pink10.png": "0adeef445a0704fd650a0e9a491acf46",
"assets/assets/blue10.png": "0c54e4c4572b65bccd520a3af5661895",
"assets/assets/yellow5.png": "70bb1d27c46176efef4318d76c4f5c30",
"assets/assets/light_pink7.png": "29cccf396423e1d0a26662c9abfdcac6",
"assets/assets/blue5.png": "a9d1a38d0082a589ca5d2875ec14a02d",
"assets/assets/blue4.png": "80561d6f4f60fcd859441879bd3734be",
"assets/assets/light_pink6.png": "042dee677f485320cc546f3e4e177f74",
"assets/assets/yellow4.png": "21bfafc0f0a9b9ccc0958aecea14f74b",
"assets/assets/lime1.png": "8bda77b81401b5a24be38e9320aa0028",
"assets/assets/light_green9.png": "0071531fa62cbdbf3ca9043a7f68d798",
"assets/assets/lime3.png": "ea264a692345026b92c1a0dfb1d60865",
"assets/assets/yellow6.png": "3c169f2e5de9d4952f18c3beb15bd9de",
"assets/assets/light_pink4.png": "05edf3bbf8287d73ae86b369db3f6ce2",
"assets/assets/blue6.png": "a843b48ab187b842084de3342aebfe13",
"assets/assets/blue7.png": "187e280deabadedfc06b5c88385053f7",
"assets/assets/light_pink5.png": "c4ba66dc388c7f3e03a344a5385a3c66",
"assets/assets/yellow7.png": "1ea05e28cf7d8cffbdc7f51a01e35cda",
"assets/assets/lime2.png": "277769319c0857ad5f4bbb487f53d95f",
"assets/assets/light_green8.png": "c75a35f3a423734d83daa41069a6f38a",
"assets/assets/lime6.png": "2a94c428f5bf37c93d5f405e02bc8ca8",
"assets/assets/yellow3.png": "6c5309fdcded9a7bc933d708198484cb",
"assets/assets/light_pink1.png": "b1506f8480c7d351158c2edb159efa8f",
"assets/assets/blue3.png": "eaaab20e00704bd660032c5eee05aac7",
"assets/assets/blue2.png": "7b7e1bb321e72d43e09f485191359f88",
"assets/assets/yellow2.png": "d33c2fca5e0331b60354a1aa8c016db4",
"assets/assets/lime7.png": "03d6fd22d5b230e1f66a9c3309dbf391",
"assets/assets/lime5.png": "1aa6771b947f877385675aea7487c3ee",
"assets/assets/light_pink2.png": "78c7a55cb80fa7ce93567b0e46c7195b",
"assets/assets/blue1.png": "7875a49341f987000262b14e456c9612",
"assets/assets/light_pink3.png": "08aee50141395cae15e344a5aeb71838",
"assets/assets/yellow1.png": "2b9665c2365e12af3cbee331a956295f",
"assets/assets/lime4.png": "58763eade5525f79a558d01825d760c9",
"assets/assets/lime9.png": "0f32ed413537c8ace0cddf8854146141",
"assets/assets/light_green3.png": "5af8ae509dbc2115aa39a595a81b6a9a",
"assets/assets/light_green2.png": "32010e86cf0f7fdfb03e01deab0e4dac",
"assets/assets/lime8.png": "a74e8a22c188005f35f250eaa67fda28",
"assets/assets/Kalam-Bold.ttf": "d2b743d0b05c1b3a693e7de8ba3bcd74",
"assets/assets/light_green1.png": "f6d842119d118413be9be3e09ae7df6c",
"assets/assets/light_green5.png": "7510b2b41482b53a6d4d4082ebdb3aac",
"assets/assets/light_pink8.png": "549fd91f9be28cf79e16b70635e3bf86",
"assets/assets/light_pink9.png": "25068d25e6ffc5d4877c45731f99da27",
"assets/assets/light_green4.png": "a0ca431e11f65caf128b78245d16d358",
"assets/assets/light_green6.png": "d1ea8d1c4b2b189f74abb064f8947629",
"assets/assets/light_green10.png": "786e4f46403f85feec47a2d945125015",
"assets/assets/yellow10.png": "2c15bc13d257e327e47f884e3756c20c",
"assets/assets/yellow9.png": "e2e81c432df3ff3e744586468fbfc2ac",
"assets/assets/blue9.png": "369e45433d58950497a1e9aa65feb670",
"assets/assets/blue8.png": "4409363e5d78c2f28563fe15555f351c",
"assets/assets/yellow8.png": "e42eec9885e288673719a506c2e0e321",
"assets/assets/light_green7.png": "14ba6a5b1d4dcb58abdca7bbfe853095",
"assets/assets/light_blue2.png": "f467c93ef1a832a5c10fed890d09195d",
"assets/assets/light_blue3.png": "b7182a95bbd526725a9067e4e6dc13b2",
"assets/assets/pink10.png": "6fd750a05f60ababa9e4a17207b0f6df",
"assets/assets/pink1.png": "19be4d5524a9b5ed6e10e8416cf25a60",
"assets/assets/light_blue10.png": "9f9dbd088b8a83d27ae9399b2044c6c7",
"assets/assets/pink3.png": "a8a3a84d575daee01f04458c24ee9eb4",
"assets/assets/light_blue1.png": "6abd893ef6a23a64ab01c45fabd0e8f3",
"assets/assets/pink2.png": "3d9b92f34d3e1aaa66f503493fac65e6",
"assets/assets/whatsapp.png": "3a8dad7f872542a95103cb9ca74dc415",
"assets/assets/pink6.png": "928b7db364b71282a8a8cb20fdfbcac7",
"assets/assets/light_blue4.png": "fecb509b9d3c83a3e5e3feb9cefcdb00",
"assets/assets/light_blue5.png": "da2d11c9bc8c14f45d8f2936e5675665",
"assets/assets/pink7.png": "dca057b9c6b4267b14c7b6dfcd8c212f",
"assets/assets/pink5.png": "33943f109ca4e795490808060f9df4d5",
"assets/assets/light_blue7.png": "2af95e7c13ef8020f5fffd88f007cb16",
"assets/assets/light_blue6.png": "72e64552afbedd98636ac826ddd7250f",
"assets/assets/pink4.png": "961617ea44b1596b442c4247bc587d26"
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
