<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Game::create([
            'name' => 'Cyberpunk 2077',
            'cover_image' => 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5?h=854&resize=1&w=640',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'PC',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);

        Game::create([
            'name' => 'SIFU',
            'cover_image' => 'https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640',
            'main_image' => 'https://cdn2.unrealengine.com/egs-greeneye-sloclap-ic1-400x400-7f5493d6af29.png?h=270&resize=1&w=480',
            "images" => "https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-04-1920x1080-325fe70a44cd.jpg,https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-05-1920x1080-6129f1b26e51.jpg,https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-06-1920x1080-b45863e5563b.jpg",
            'category' => 'PC',
            'tags' => 'FIGHTING',
            'price' => 39.99,
            'discount' => 15,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);

        Game::create([
            'name' => "Assassin's Creed® Valhalla",
            'cover_image' => 'https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png?h=854&resize=1&w=640',
            'main_image' => 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fassassins-creed-valhalla%2Fhome%2FAC-KINGDOM-PREORDER_STANDARD-EDITION_EPIC_Game_Logo_whiteblue_1000x375-1000x375-baa332e9500ef71697f4a31924488fe309c4784d.png?h=270&resize=1&w=480',
            "images" => 'https://cdn.mos.cms.futurecdn.net/iNiU9epDmKD5WSerpTpL9h-1200-80.jpg,https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2022/03/ACK_DLC3_31_EnemyVariety.jpg?resize=1920%2C1080&ssl=1,https://images.gnwcdn.com/2020/usgamer/Assassins-Creed-Valhalla-Review-Screenshot-6-11082020.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/assassins-creed-valhalla-review.jpg',
            'category' => 'PC',
            'tags' => 'ADVENTURE',
            'price' => 59.99,
            'discount' => 35,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'The Witcher 3: Wild Hunt',
            'cover_image' => 'https://cdn1.epicgames.com/14ee004dadc142faaaece5a6270fb628/offer/EGS_TheWitcher3WildHuntGameoftheYear_CDPROJEKTRED_S2-1200x1600-d887e1b749d11e8876996227e4de5c89.jpg?h=854&resize=1&w=640',
            'main_image' => 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fthe-witcher-3-wild-hunt%2Fhome%2FEN_The-Witcher-3_Logo-White_RGB-2174x1069-a29d34d0021955e894b81743c1a296e45d77658f.png?h=270&resize=1&w=480',
            "images" => 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fthe-witcher-3%2Fhome%2FEGS_TheWitcher3WildHuntGameoftheYear_CDPROJEKTRED_G1A_00-1920x1080-8e05272aaff9123fcd10203cb2aa21a5a6e9f89d.jpg,https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fthe-witcher-3%2Fhome%2FEGS_TheWitcher3WildHuntGameoftheYear_CDPROJEKTRED_G1A_05-1920x1080-488f9b88a585075f482058a54c71153c77cbfe67.jpg,https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fthe-witcher-3%2Fhome%2FEGS_TheWitcher3WildHuntGameoftheYear_CDPROJEKTRED_G1A_04-1920x1080-df08b8d74384a7e78e8973d1a738c40d74d21f03.jpg',
            'category' => 'PC',
            'tags' => 'RGP',
            'price' => 49.99,
            'discount' => 40,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Dying Light 2 Stay Human',
            'cover_image' => 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S4_1200x1600-b3d66b4576fd6488b674710e13493435?h=854&resize=1&w=640',
            'main_image' => 'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-ic5-400x166-55b2799d56f3.png?h=270&resize=1&w=480',
            "images" => 'https://cdn2.unrealengine.com/dl2-screenshot-egs-7-3840x2160-cac49f07324b.jpg,https://cdn2.unrealengine.com/dl2-screenshot-egs-8-3840x2160-5a858ef4c0c3.jpg,https://cdn2.unrealengine.com/dl2-screenshot-egs-12-1920x1080-f54276ec765e.jpg',
            'category' => 'PC',
            'tags' => 'HORROR',
            'price' => 59.99,
            'discount' => 0,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Expedition Zero',
            'cover_image' => 'https://cdn1.epicgames.com/spt-assets/266e8df5fe644e8db409e710960a7475/download-expedition-zero-offer-hw6er.jpg?h=854&resize=1&w=640',
            'main_image' => 'https://cdn1.epicgames.com/spt-assets/266e8df5fe644e8db409e710960a7475/expedition-zero-logo-c5qqj.png?h=270&resize=1&w=480',
            "images" => 'https://cdn1.epicgames.com/spt-assets/266e8df5fe644e8db409e710960a7475/expedition-zero-1gjsk.jpg,https://cdn1.epicgames.com/spt-assets/266e8df5fe644e8db409e710960a7475/expedition-zero-6mrua.jpg,https://cdn1.epicgames.com/spt-assets/266e8df5fe644e8db409e710960a7475/expedition-zero-1vbtd.jpg',
            'category' => 'PC',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 2,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'NARAKA: BLADEPOINT',
            'cover_image' => 'https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-bf2b70ddd7ad45e44e629809e1b0ad10?h=854&resize=1&w=640',
            'main_image' => 'https://cdn2.unrealengine.com/egs-narakabladepoint…ic1-400x146-6f7be3db7ca0.png?h=270&resize=1&w=480',
            "images" => 'https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-g1a-00-1920x1080-f54eba691f2f.jpg,	https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-g1a-04-1920x1080-96cf197e6bfd.jpg,	https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-g1a-08-1920x1080-d5d18ea00a62.jpg',
            'category' => 'PC',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 0,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Far Cry® 6',
            'cover_image' => 'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640',
            'main_image' => 'https://cdn2.unrealengine.com/fc6-logo-400x150-7808789f6a13.png?h=270&resize=1&w=480',
            "images" => '	https://cdn2.unrealengine.com/uk-uk-fc6-ksp-scr-01…-1920x1080-396a1c2237d3.png?h=720&resize=1&w=1280,https://cdn2.unrealengine.com/uk-fc6-ksp-scr-04-19…-1920x1080-1f8e460aaf46.png?h=720&resize=1&w=1280,https://cdn2.unrealengine.com/uk-fc6-ksp-scr-07-19…-1920x1080-29b3a30c7b0c.png?h=720&resize=1&w=1280',
            'category' => 'PC',
            'tags' => 'ACTION',
            'price' => 59.99,
            'discount' => 30,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'League Of Legends',
            'cover_image' => 'https://m.media-amazon.com/images/M/MV5BYjM2NmU3YmEtZDI1OC00NTQ5LWJmOGMtYmZmNGUyMWRlODBmXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg',
            'main_image' => 'https://www.leagueoflegends.com/static/logo-800-47024e2aeaaa8651c172ba883264dd43.png',
            "images" => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_UDfrXsncdFD0XhlDKhVs979cGXVT_-lAw&usqp=CAU,https://media.pocketgamer.com/artwork/na-30672-1605595336/viber_image_2020-11-17_14-40-414_jpg_1280.jpg,https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/04/06/1331852802729_4/league-of-legends',
            'category' => 'PC',
            'tags' => 'STRATEGY',
            'price' => 10,
            'discount' => 10,
            'currentDivision' => 'Iron I,Iron II,Iron III,Bronze I,Bronze II,Bronze III,Silver I,Silver II,Silver III,Gold I,Gold II,Gold III,Platinum I,Platinum II,Platinum III,Diamond I,Diamond II,Diamond III,Immortal I,Immortal II,Immortal III',
            'desiredDivision' => 'Iron I,Iron II,Iron III,Bronze I,Bronze II,Bronze III,Silver I,Silver II,Silver III,Gold I,Gold II,Gold III,Platinum I,Platinum II,Platinum III,Diamond I,Diamond II,Diamond III,Immortal I,Immortal II,Immortal III'
        ]);
        Game::create([
            'name' => 'League of Legends: Wild Rift',
            'cover_image' => 'https://play-lh.googleusercontent.com/HYbCzhAI27G_Hd2F-qPKHZJq6O7Xfrli6GjH-MPfCT5QeQdytUx_PxDE8idRqOn4lXQ',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'android',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Genshin Impact',
            'cover_image' => 'https://play-lh.googleusercontent.com/N4temUSSlAJJMcAwIYesN2g9vZ4QljGPC-pWHDFx8CMEAPdrbHvTr259q9G6EAQ083nj',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'android',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Sky: Children of the Light',
            'cover_image' => 'https://play-lh.googleusercontent.com/77buTKKgMf3svuVK-LXLoQtw3ATXE93LHG1Gu3Sp7rXBDda70mFwSQLkK9Bld9nPM44',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'android',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Shadow of Death: Dark Knight',
            'cover_image' => 'https://play-lh.googleusercontent.com/g0t9AT6_vSPCQ7NjvunlLcGumBWIqz1od2eedmL17pX_YWwGD9TJck-bAb10BmQ6Gcs',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'android',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Cytus II',
            'cover_image' => 'https://play-lh.googleusercontent.com/OWPLo_aeRocMDZH_V0VRa06XT642hwoUav3JjxXY3LCtb_qnWQuXjhZ1lKdT8Inz0yIL',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'android',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'DEEMO II',
            'cover_image' => 'https://play-lh.googleusercontent.com/trnPbJ6P1G9tXM_y03KM-ODyq0wpIlmczUBvFi77p_9jFa_R1ov83Ya7wJP9oWSpMg',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'ios',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Deemo',
            'cover_image' => 'https://play-lh.googleusercontent.com/_As2vGjTdYMHQHy2OZ8J3npK0uqkw2aKBTcHUI5UvqXsuMO2cQHEsjzFfbYZeOf6HA',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'ios',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Botworld Adventure',
            'cover_image' => 'https://play-lh.googleusercontent.com/Ow49SushZUuIXCEEFvBGI_GXYVML9igkNFY3_bI-p07n5OppCC8rejYOvr9na--uWA',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'ios',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => "Alto's Odyssey",
            'cover_image' => 'https://play-lh.googleusercontent.com/l4PdRz_ZURsgohnf9z-4uN2eLgnDTAZXPfcQVo7gNoqR4rYqI0Ed2BQVH51sa_KDNUU',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'ios',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
        Game::create([
            'name' => 'Orbia: Tap and Relax',
            'cover_image' => 'https://play-lh.googleusercontent.com/Pbg5wU65MZJX7BgZDvz6Q_eiGQ4_7WRF8JZY7_FZskdRcU2n6Z9Z98kTlbvSFczrbGQ',
            'main_image' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480',
            'images' => 'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg,https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-15-02-24-22-1920x1080-16b1ecf631c4.jpg',
            'category' => 'ios',
            'tags' => 'ACTION',
            'price' => 19.99,
            'discount' => 10,
            'currentDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III',
            'desiredDivision' => 'Open I,Open II,Open III,Open IV,Contender I,Contender II,Contender III,Champion I,Champion II,Champion III'
        ]);
      
    }
}
