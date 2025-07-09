import { Song } from '../types/music';
// import sahsra from '../../public/assets/songs/vishnu-sahasranamam.mp3';
// ✅ Imports for all 57 songs
import aedho_saigirai from '../../public/assets/songs/Aedho-Saigirai.mp3';
import alaipayuthey_kanna from '../../public/assets/songs/Alaipayuthey-Kanna.mp3';
import ammadi_athadi_masstamilan_org from '../../public/assets/songs/Ammadi-Athadi-MassTamilan.org.mp3';
import antartica_masstamilan_fm from '../../public/assets/songs/Antartica-MassTamilan.fm.mp3';
import arabu_naad from '../../public/assets/songs/Arabu-Naade.mp3';
import azhakana_rasathaiye from '../../public/assets/songs/Azhakana-Ratsasiye.mp3';
import chinna_chinnathai_penn from '../../public/assets/songs/Chinna-Chinnathai-Penne.mp3';
import chudithar_aninthu_vanthu from '../../public/assets/songs/Chudithar-Aninthu-Vantha.mp3';
import en_iniya_thanimaye_masstamilan_io from '../../public/assets/songs/En-Iniya-Thanimaye-MassTamilan.io.mp3';
import en_jannal_vandha from '../../public/assets/songs/En-Jannal-Vandha.mp3';
import en_jeevan from '../../public/assets/songs/En-Jeevan.mp3';
import ennamo_yeatho from '../../public/assets/songs/Ennamo Yeadho.mp3';
import enna_vilai from '../../public/assets/songs/Enna-Vilai.mp3';
import evan_di_unna_pethan from '../../public/assets/songs/Evan-Di-Unna-Pethan.mp3';
import hey_minnale from '../../public/assets/songs/Hey Minnale.mp3';
import hey_sandakkara from '../../public/assets/songs/Hey-Sandakkara.mp3';
import iayayo from '../../public/assets/songs/Iayyayo.mp3';
import innum_konjam_neram from '../../public/assets/songs/Innum-Konjam-Neram.mp3';
import kaatrukulle from '../../public/assets/songs/Kaatrukulle.mp3';
import kadhal_vaithu from '../../public/assets/songs/Kadhal Vaithu.mp3';
import kadhal_valarthen from '../../public/assets/songs/Kadhal Valarthen.mp3';
import kadhal_vandhale_masstamilan_org from '../../public/assets/songs/Kadhal-Vandhale-MassTamilan.org.mp3';
import kannana_kanney_masstamilan_fm from '../../public/assets/songs//Kannaana-Kanney-MassTamilan.fm.mp3';
import loosu_penne_masstamilan_fm from '../../public/assets/songs/Loosu-Penne-MassTamilan.org.mp3';
import machaan_machaan from '../../public/assets/songs/Machaan Machaan.mp3';
import mannipaaya from '../../public/assets/songs/Mannipaaya.mp3';
import meghame_o_meghame from '../../public/assets/songs//Meghame O Meghame.mp3';
import minnalgal_koothadum from '../../public/assets/songs/Minnalgal Koothadum.mp3';
import nee_singam_dhan_masstamilan_dev from '../../public/assets/songs/Nee-Singam-Dhan-MassTamilan.dev.mp3';
import nenje_nenje from '../../public/assets/songs/Nenje Nenje.mp3';
import nenjukkul_peidhidum_masstamilan_com from '../../public/assets/songs/Nenjukkul-Peidhidum-MassTamilan.com.mp3';
import no_money_no_honey from '../../public/assets/songs/No-Money-No-Honey.mp3';
import ore_nyabagam from '../../public/assets/songs/Ore Nyabagam.mp3';
import oru_punnagai_thane from '../../public/assets/songs/Oru-Punnagai-Thane.mp3';
import paakathey_paakathey from '../../public/assets/songs/Paakathey-Paakathey.mp3';
import para_para from '../../public/assets/songs/Para-Para.mp3';
import poda_poda from '../../public/assets/songs/Poda-Poda.mp3';
import pogadhey_pogadhey from '../../public/assets/songs/Pogadhey Pogadhey.mp3';
import poi_varavaa_masstamilan_fm from '../../public/assets/songs/Poi-Varavaa-MassTamilan.fm.mp3';
import pookal_pookum from '../../public/assets/songs/Pookal Pookum.mp3';
import poongatre_poongatre from '../../public/assets/songs/Poongatre-Poongatre.mp3';
import poo_pookum_osai from '../../public/assets/songs/Poo-Pookum-Osai.mp3';
import rasaali from '../../public/assets/songs/Rasaali.mp3';
import sakkara_masstamilan_com from '../../public/assets/songs/Sakkara-MassTamilan.com.mp3';
import shakaklakka_baby from '../../public/assets/songs/Shakkalakka-Baby.mp3';
import siragugal from '../../public/assets/songs/Siragugal.mp3';
import sudasuda_thooral from '../../public/assets/songs/Sudasuda-Thooral.mp3';
import thaakuthe from '../../public/assets/songs/Thaakkuthe.mp3';
import thenmerku_paruva_kaatru from '../../public/assets/songs/Thenmerku-Paruva-Kaatru.mp3';
import thooovaanam from '../../public/assets/songs/Thoovaanam.mp3';
import un_mela_aasadhan from '../../public/assets/songs/Un-Mela-Aasadhaan.mp3';
import uyire_en_uyire from '../../public/assets/songs/Uyire-En-Uyire.mp3';
import vaanam from '../../public/assets/songs/Vaanam.mp3';
import vennmathiye from '../../public/assets/songs/Venmathiye.mp3';
import venpaniye from '../../public/assets/songs/Venpaniye.mp3';
import yen_minukki_masstamilan_org from '../../public/assets/songs/Yen-Minukki-MassTamilan.org.mp3';
import anbenum_masstamilan from '../../public/assets/songs/Anbenum-MassTamilan.dev.mp3';
import appane_pillaiyarappane_masstamilan from '../../public/assets/songs/Appane-Pillaiyarappane-MassTamilan.dev.mp3';
import arabic_kuthu_masstamilan from '../../public/assets/songs/Arabic-Kuthu---Halamithi-Habibo-MassTamilan.so.mp3';
import bhoomiku from '../../public/assets/songs/Bhoomiku.mp3';
import chikitu_masstamilan from '../../public/assets/songs/Chikitu-MassTamilan.dev.mp3';
import chotta_chotta_nanaya from '../../public/assets/songs/Chotta-Chotta-Nanaya.mp3';
import en_idhayam from '../../public/assets/songs/En-Idhayam.mp3';
import hare_rama_krishna from '../../public/assets/songs/Hare-Rama-Hare-Krishna.mp3';
import i_love_you from '../../public/assets/songs/I-Love-You.mp3';
import idhu_varai from '../../public/assets/songs/Idhu-Varai.mp3';
import irumible_oru_idhayam from '../../public/assets/songs/Irumbile-Oru-Idhaiyam.mp3';
import kadal_anukkal from '../../public/assets/songs/Kadal-Anukkal.mp3';
import kandukondain_kandukondain from '../../public/assets/songs/Kandukondain-Kandukondain.mp3';
import kannamoochi_yenada from '../../public/assets/songs/Kannamoochi-Yenada.mp3';
import karikalan_kala_pola from '../../public/assets/songs/Karikalan-Kala-Pola.mp3';
import konjum_mainakkale from '../../public/assets/songs/Konjum-Mainakkale.mp3';
import mayam_seidhayo from '../../public/assets/songs/Mayam-Seidhayo.mp3';
import naane_indhiran from '../../public/assets/songs/Naane-Indhiran.mp3';
import nenjangootti_neeye from '../../public/assets/songs//Nenjangootil-Neeye.mp3';
import oru_thaali_ragam from '../../public/assets/songs/Oru-Thalai-Ragam.mp3';
import poo_mudal_pen_varai from '../../public/assets/songs/Poo-Mudhal-Pen-Varai.mp3';
import sollamal_thottu from '../../public/assets/songs/Sollamal-Thottu-Chellum-Thendral.mp3';
import thalattum_katre_vaa from '../../public/assets/songs/Thalattum-Katre-Vaa-MassTamilan.dev.mp3';
import thattan_thattaan from '../../public/assets/songs/Thattaan-Thattaan-MassTamilan.fm.mp3';
import unnai_paartha_pinbu from '../../public/assets/songs/Unnai-Paartha-Pinbu.mp3';
import unnoodu_vaazha from '../../public/assets/songs/Unnodu-Vaazhatha.mp3';
import urugudhe_maragudhe from '../../public/assets/songs/Urugudhe-Maragudhe.mp3';
import vaa_rayil_vida_polaama from '../../public/assets/songs/Vaa-Rayil-Vida-Polaama-MassTamilan.com.mp3';
import velicha_poove from '../../public/assets/songs/Velicha-Poove.mp3';
import veyilodu_vilayadi from '../../public/assets/songs/Veyilodu-Vilayadi.mp3';
import vithi_moodi_yosithaal from '../../public/assets/songs/Vizhi Moodi Yosithaal.mp3';
import vizhigalil_aruginil_vaanam from '../../public/assets/songs/Vizhigalin-Aruginil-Vaanam-MassTamilan.com.mp3';
import vizhiyil_un_vizhiyil from '../../public/assets/songs/Vizhiyil-Un-Vizhiyil.mp3';
import asai_asai from '../../public/assets/songs/Aasai Aasai.mp3';
import anbe_sivam from '../../public/assets/songs/Anbe Sivam.mp3';
import anbe_anbe from '../../public/assets/songs/Anbe-Anbe.mp3';
import antha_nilavathan_masstamilan_io from '../../public/assets/songs/Antha-Nilavathan-MassTamilan.io.mp3';
import azhagooril_poothavale from '../../public/assets/songs/Azhagooril-Poothavale.mp3';
import dhimsu_katta from '../../public/assets/songs/Dhimsu-Katta.mp3';
import en_uyire from '../../public/assets/songs/En-Uyire.mp3';
import ennake_ennake from '../../public/assets/songs/Ennake-Ennaka.mp3';
import ennavale_ennavale from '../../public/assets/songs/Ennavale-Ennavale.mp3';
import ennodu_laila from '../../public/assets/songs/Ennoda-Laila.mp3';
import idhuthanaa from '../../public/assets/songs/Idhuthaanaa.mp3';
import ilankaathu_veesuthey from '../../public/assets/songs/Ilankaathu-Veesuthey.mp3';
import kaadhal_vandhal from '../../public/assets/songs/Kaadhal-Vandhal.mp3';
import kadhal_oviyam_masstamilan_io from '../../public/assets/songs/Kadhal-Oviyam-MassTamilan.io.mp3';
import kadhal_solvadhu from '../../public/assets/songs/Kadhal-Solvadhu.mp3';
import kammaniye_masstamilan_com from '../../public/assets/songs/Kanmaniyae-MassTamilan.com.mp3';
import kannoodu_kanbarellam from '../../public/assets/songs/Kannodu-Kaanberallam.mp3';
import malligaiye_malligaiye from '../../public/assets/songs/Malligaiye-Malligaiye.mp3';
import margazhi_thingal from '../../public/assets/songs/Margazhi-Thingal.mp3';
import master_the_blaster_masstamilan_io from '../../public/assets/songs/Master-the-Blaster-MassTamilan.io.mp3';
import may_madham from '../../public/assets/songs/May Madham.mp3';
import mazhai_varum_arikuri from '../../public/assets/songs/Mazhai-Varum-Arikuri.mp3';
import melliname_mellinamae from '../../public/assets/songs/Mellinamae Mellinamae.mp3';
import minnalai_pidithu from '../../public/assets/songs/Minnalai Pidithu.mp3';
import munbe_vaa from '../../public/assets/songs/Munbe Vaa.mp3';
import nee_kaatru_naan_maram_masstamilan_com from '../../public/assets/songs/Nee-Kaatru-Naan-Maram-MassTamilan.com.mp3';
import nee_thoongum_naerathil_masstamilan_com from '../../public/assets/songs/Nee-Thoongum-Naerathil-MassTamilan.com.mp3';
import nenjinline_nenjinline from '../../public/assets/songs/Nenjinile-Nenjinile.mp3';
import new_york_nagaram from '../../public/assets/songs/New York Nagaram.mp3';
import nilavai_kondu_vaa from '../../public/assets/songs/Nilavai-Kondu-Vaa.mp3';
import oru_koottu_kili from '../../public/assets/songs/Oru Koottu Kili.mp3';
import oru_thadavai from '../../public/assets/songs/Oru Thadavai.mp3';
import oru_jeevan_azhaithathu_masstamilan_io from '../../public/assets/songs/Oru-Jeevan-Azhaithathu-MassTamilan.io.mp3';
import poi_solla_intha_manasukku from '../../public/assets/songs/Poi-Solla-Intha-Manasukku.mp3';
import poovaasam from '../../public/assets/songs/Poovaasam.mp3';
import poovukkul from '../../public/assets/songs/Poovukkul.mp3';
import pottu_vaithu from '../../public/assets/songs/Pottu-Vaithu.mp3';
import pudichirukku from '../../public/assets/songs/Pudichirukku.mp3';
import sahana_saral_thoo from '../../public/assets/songs/Sahana-Saral-Thoo.mp3';
import sandhossa_kanneere from '../../public/assets/songs/Sandhosa-Kanneere.mp3';
import senthoora_poove from '../../public/assets/songs/Senthoora-Poove.mp3';
import sona_sona from '../../public/assets/songs/Sona-Sona.mp3';
import thaiyya_thaiyya from '../../public/assets/songs/Thaiyya-Thaiyya.mp3';
import thamthakka_theenthakkathom from '../../public/assets/songs/Thamthakka-Theenthakka.mp3';
import uyerin_uyere from '../../public/assets/songs/Uyerin-Uyere.mp3';
import vaathi_raid_masstamilan_io from '../../public/assets/songs/Vaathi-Raid-MassTamilan.io.mp3';
import yea_nenjea from '../../public/assets/songs/Yea-Nenjea.mp3';



// cover
import aedho from "../../public/assets/songscover/ethoseikirai.jpg"
import alai from "../../public/assets/songscover/alaipayuthae.png"
import ammadi from "../../public/assets/songscover/ammadiathadi.jpg"
import andartica from  "../../public/assets/songscover/andartica.jpeg"
import anbenum from "../../public/assets/songscover/anbenum.jpg"
import arabickuthu from '../../public/assets/songscover/arabikuthu.jpeg'
import arabu from '../../public/assets/songscover/arabu.jpg'
import azhagna from '../../public/assets/songscover/azhaganarat.jpeg'
import bhoomiu from '../../public/assets/songscover/bhoomiku.jpeg'
import chiinachinna from '../../public/assets/songscover/chiinachinnathaipenne.jpeg'
import chikutuvibe from '../../public/assets/songscover/chikutuvibe.jpeg'
import chotta from '../../public/assets/songscover/chottchotta.jpg'
import chudi from '../../public/assets/songscover/chuditharaninthu.jpg'
import enidhayam from '../../public/assets/songscover/enidhayam.jpeg'
import eniniya from '../../public/assets/songscover/eniniyathanimiye.jpg'
import enjannal from '../../public/assets/songscover/enjannal.jpg'
import ayayo from '../../public/assets/songscover/ayayo.jpeg'
import enamo from '../../public/assets/songscover/enamoetho.jpeg'
import enjeev from '../../public/assets/songscover/enjeevan.jpeg'
import ennavilai from '../../public/assets/songscover/ennavilai.jpeg'
import evandi from '../../public/assets/songscover/evandi.jpeg'
import eysanda from '../../public/assets/songscover/eysandakara.jpeg'
import heyminnale from '../../public/assets/songscover/heyminnale.jpg'
import inukon from '../../public/assets/songscover/inukonjanemram.jpg'
import irumbile from '../../public/assets/songscover/irumbile.jpeg'
import ithuvarai from '../../public/assets/songscover/ithuvarai.jpg'
import podapo from '../../public/assets/songscover/podapod.jpg'
import kaatrkulle from '../../public/assets/songscover/kaatrukulle.jpg';
import kadhalanukkal from '../../public/assets/songscover/kadhalanukkal.jpg';
import kadhalvaithu from '../../public/assets/songscover/kadhalvaithu.jpeg';
import kadhalvalarthen from '../../public/assets/songscover/kadhalvalarthen.jpeg';
import kadhalvanthale from '../../public/assets/songscover/kadhalvanthale.jpeg';
import kandukonden from '../../public/assets/songscover/kandukonden.jpeg';
import kannamoochi from '../../public/assets/songscover/kannamoochi.jpg';
import kannanakane from '../../public/assets/songscover/kannanakane.jpg';
import karigalan from '../../public/assets/songscover/Karigalan-Kala-Pola-Song-Lyrics-From-Vettaikaran.jpg';
import konjummainakkale from '../../public/assets/songscover/konjummainakkale.jpg';
import loosupenne from '../../public/assets/songscover/loosupenne.jpg';
import machamacha from '../../public/assets/songscover/machamacha.jpg';
import manniapaya from '../../public/assets/songscover/manniapaya.jpeg';
import mayamseidayo from '../../public/assets/songscover/mayamseidayo.jpg';
import megameohmegame from '../../public/assets/songscover/megameohmegame.jpg';
import minnalgal from '../../public/assets/songscover/minnalgal.jpeg';
import naneindiran from '../../public/assets/songscover/nane indiran.jpg';
import nenje from '../../public/assets/songscover/nenje.jpg';
import nenjukkul from '../../public/assets/songscover/Nenjukkul-Peidhidum-Lofi-Flip--Tamil-2021-20210921204912-500x500.jpg';
import nesingam from '../../public/assets/songscover/nesingam.jpg';
import nomoney from '../../public/assets/songscover/no money.jpg';
import oregyabagamp from '../../public/assets/songscover/ore gyabagam.jpg';
import oruthalaire from '../../public/assets/songscover/oru thalairagam.jpeg';
import orupunnagai from '../../public/assets/songscover/orupunnagai.jpeg';
import pakatha from '../../public/assets/songscover/pakatha.jpeg';
import parapara from '../../public/assets/songscover/parapara.jpeg';
import podapoda from '../../public/assets/songscover/podapoda.jpg';
import pogathey from '../../public/assets/songscover/pogathey.jpg';
import poivarava from '../../public/assets/songscover/poivarava.jpeg';
import poomudhal from '../../public/assets/songscover/poomudhal.jpeg';
import poonkatre from '../../public/assets/songscover/poonkatre.jpg';
import poopookumosaip from '../../public/assets/songscover/poopookumosai.jpg';
import popkalpookum from '../../public/assets/songscover/ppokalpookum.jpeg';
import rasali from '../../public/assets/songscover/rasali.jpeg';
import sakalakababy from '../../public/assets/songscover/sakalakababy.jpg';
import sakkaraja from '../../public/assets/songscover/sakkara.jpg';
import siragugalsarvam from '../../public/assets/songscover/siragugal.jpeg';
import sollamal from '../../public/assets/songscover/sollamal.jpeg';
import sudasudathooral from '../../public/assets/songscover/sudasudathooral.jpeg';
import thakuthe_kan_thakuthe from '../../public/assets/songscover//thakkuthey kan.jpg';
import thalatum from '../../public/assets/songscover/thalatum.jpeg';
import thattanthatan from '../../public/assets/songscover/thattanthatan.jpg';
import thenmerku from '../../public/assets/songscover/thenmerku.jpeg';
import thoovanam from '../../public/assets/songscover/thoovanam.jpg';
import un_mela_asathan from '../../public/assets/songscover/un mela asathan.jpg';
import urukuthey from '../../public/assets/songscover/urukuthey.jpg';
import unnoduvazhatha from '../../public/assets/songscover/unnoduvazhatha.jpg';
import uyire_enuyire from '../../public/assets/songscover/uyire enuyire.jpg';
import vaanamdeivam from '../../public/assets/songscover/vaanam.jpeg';
import varayil from '../../public/assets/songscover/varayil.jpg';
import velichapoove from '../../public/assets/songscover/velicahpoove.jpg';
import venmathi from '../../public/assets/songscover/venmathi.jpeg';
import venpaniye_ from '../../public/assets/songscover/venpaniye.jpg';
import veyilodu from '../../public/assets/songscover/veyilodu.jpg';
import vizhiganil from '../../public/assets/songscover/vizhiganil.jpg';
import vizhimoodi from '../../public/assets/songscover/vizhimoodi.jpg';
import vizhiyil from '../../public/assets/songscover/vizhiyil un vizhiyil.jpg';
import yen_minukki from '../../public/assets/songscover/yen minukki.jpg';
import ilikeu from '../../public/assets/songscover/ilikeu.jpg';
import asai_asai_cover from '../../public/assets/songscover/asai_asai_cover.jpg';
import anbe_sivam_cover from '../../public/assets/songscover/anbe_sivam_cover.jpg';
import anbe_anbe_cover from '../../public/assets/songscover/anbe_anbe_cover.jpg';
import antha_nilavathan_masstamilan_io_cover from '../../public/assets/songscover/antha_nilavathan_masstamilan_io_cover.jpg';
import azhagooril_poothavale_cover from '../../public/assets/songscover/azhagooril_poothavale_cover.jpg';
import dhimsu_katta_cover from '../../public/assets/songscover//dhimsu_katta_cover.jpeg';
import en_uyire_cover from '../../public/assets/songscover/en_uyire_cover.jpg';
import ennake_ennake_cover from '../../public/assets/songscover/ennake_ennake_cover.jpeg';
import ennavale_ennavale_cover from '../../public/assets/songscover/ennavale_ennavale_cover.jpg';
import ennodu_laila_cover from '../../public/assets/songscover/ennodu_laila_cover.jpg';
import idhuthanaa_cover from '../../public/assets/songscover/idhuthanaa_cover.jpg';
import ilankaathu_veesuthey_cover from '../../public/assets/songscover/ilankaathu_veesuthey_cover.jpg';
import kaadhal_vandhal_cover from '../../public/assets/songscover/kaadhal_vandhal_cover.jpg';
import kadhal_oviyam_masstamilan_io_cover from '../../public/assets/songscover/kadhal_oviyam_masstamilan_io_cover.jpg';
import kadhal_solvadhu_cover from '../../public/assets/songscover/kadhal_solvadhu_cover.jpeg';
import kammaniye_masstamilan_com_cover from '../../public/assets/songscover/kammaniye_masstamilan_com_cover.jpg';
import kannoodu_kanbarellam_cover from '../../public/assets/songscover/kannoodu_kanbarellam_cover.jpg';
import malligaiye_malligaiye_cover from '../../public/assets/songscover/malligaiye_malligaiye_cover.jpg';
import margazhi_thingal_cover from '../../public/assets/songscover/margazhi_thingal_cover.jpeg';
import master_the_blaster_masstamilan_io_cover from '../../public/assets/songscover/master_the_blaster_masstamilan_io_cover.jpg';
import may_madham_cover from '../../public/assets/songscover/may_madham_cover.jpg';
import mazhai_varum_arikuri_cover from '../../public/assets/songscover/mazhai_varum_arikuri_cover.jpg';
import melliname_mellinamae_cover from '../../public/assets/songscover//melliname_mellinamae_cover.jpeg';
import minnalai_pidithu_cover from '../../public/assets/songscover/minnalai_pidithu_cover.jpg';
import munbe_vaa_cover from '../../public/assets/songscover/munbe_vaa_cover.jpeg';
import nee_kaatru_naan_maram_masstamilan_com_cover from '../../public/assets/songscover/nee_kaatru_naan_maram_masstamilan_com_cover.jpg';
import nee_thoongum_naerathil_masstamilan_com_cover from '../../public/assets/songscover//nee_thoongum_naerathil_masstamilan_com_cover.jpeg';
import nenjinline_nenjinline_cover from '../../public/assets/songscover/nenjinline_nenjinline_cover.jpg';
import new_york_nagaram_cover from '../../public/assets/songscover/new_york_nagaram_cover.jpg';
import nilavai_kondu_vaa_cover from '../../public/assets/songscover/nilavai_kondu_vaa_cover.jpg';
import oru_koottu_kili_cover from '../../public/assets/songscover/oru_koottu_kili_cover.jpg';
import oru_thadavai_cover from '../../public/assets/songscover/oru_thadavai_cover.jpg';
import oru_jeevan_azhaithathu_masstamilan_io_cover from '../../public/assets/songscover/oru_jeevan_azhaithathu_masstamilan_io_cover.jpg';
import poi_solla_intha_manasukku_cover from '../../public/assets/songscover/poi_solla_intha_manasukku_cover.jpg';
import poovaasam_cover from '../../public/assets/songscover/poovaasam_cover.jpeg';
import poovukkul_cover from '../../public/assets/songscover/poovukkul_cover.jpeg';
import pottu_vaithu_cover from '../../public/assets/songscover/pottu_vaithu_cover.jpg';
import pudichirukku_cover from '../../public/assets/songscover/pudichirukku_cover.jpg';
import sahana_saral_thoo_cover from '../../public/assets/songscover/sahana_saral_thoo_cover.jpg';
import sandhossa_kanneere_cover from '../../public/assets/songscover/sandhossa_kanneere_cover.jpg';
import senthoora_poove_cover from '../../public/assets/songscover/senthoora_poove_cover.jpg';
import sona_sona_cover from '../../public/assets/songscover/sona_sona_cover.jpeg';
import thaiyya_thaiyya_cover from '../../public/assets/songscover/thaiyya_thaiyya_cover.jpg';
import thamthakka_theenthakkathom_cover from '../../public/assets/songscover//thamthakka_theenthakkathom_cover.jpeg';
import uyerin_uyere_cover from '../../public/assets/songscover/uyerin_uyere_cover.jpeg';
import vaathi_raid_masstamilan_io_cover from '../../public/assets/songscover/vaathi_raid_masstamilan_io_cover.jpeg';
import yea_nenjea_cover from '../../public/assets/songscover/yeh-nenje.png';
import unnaipatha_cover from '../../public/assets/songscover/unnaipartha_cover.jpeg';










// Sample audio files - Replace these URLs with your actual audio files
export const songs: Song[] = [
  {
    id: '1',
    title: 'Aedho Saigirai',
    artist: 'vaamanan',
    album: 'vaamanan',
    cover: aedho,
    audioUrl: aedho_saigirai
  },
  {
    id: '2',
    title: 'Alaipayuthey Kanna',
    artist: 'Alaipayuthey',
    album: 'Unknown',
    cover: alai,
    audioUrl: alaipayuthey_kanna
  },
  {
    id: '3',
    title: 'Ammadi Athadi MassTamilan',
    artist: 'Vallavan',
    album: 'Unknown',
    cover: ammadi,
    audioUrl: ammadi_athadi_masstamilan_org
  },
  {
    id: '4',
    title: 'Antartica MassTamilan',
    artist: 'Thuppaki',
    album: 'Unknown',
    cover: andartica,
    audioUrl: antartica_masstamilan_fm
  },
  {
    id: '5',
    title: 'Arabu Naad',
    artist: 'Thottal poo malarum',
    album: 'Unknown',
    
    cover: arabu,
    audioUrl: arabu_naad
  },
  {
    id: '6',
    title: 'Azhakana Rasathaiye',
    artist: 'Mudhalvan',
    album: 'Unknown',
    
    cover: azhagna,
    audioUrl: azhakana_rasathaiye
  },
  {
    id: '7',
    title: 'Chinna Chinnathai Penn',
    artist: 'Vettaikaran',
    album: 'Unknown',
    
    cover: chiinachinna,
    audioUrl: chinna_chinnathai_penn
  },
  {
    id: '8',
    title: 'Chudithar Aninthu Vanthu',
    artist: 'Chudithar Aninthu',
    album: 'Unknown',
    
    cover: chudi,
    audioUrl: chudithar_aninthu_vanthu
  },
  {
    id: '9',
    title: 'En Iniya Thanimaye MassTamilan',
    artist: 'Teddy',
    album: 'Unknown',
    
    cover: eniniya,
    audioUrl: en_iniya_thanimaye_masstamilan_io
  },
  {
    id: '10',
    title: 'En Jannal Vandha',
    artist: 'Theeratha Vilayattu Pillai',
    album: 'Unknown',
    
    cover: enjannal,
    audioUrl: en_jannal_vandha
  },
  {
    id: '11',
    title: 'En Jeevan',
    artist: 'Theri',
    album: 'Unknown',
    
    cover: enjeev,
    audioUrl: en_jeevan
  },
  {
    id: '12',
    title: 'Ennamo Yeatho',
    artist: 'KO',
    album: 'Unknown',
    
    cover: enamo,
    audioUrl: ennamo_yeatho
  },
  {
    id: '13',
    title: 'Enna Vilai',
    artist: 'kadhalar dhinam',
    album: 'Unknown',
    
    cover: ennavilai,
    audioUrl: enna_vilai
  },
  {
    id: '14',
    title: 'Evan Di Unna Pethan',
    artist: 'Vaanam',
    album: 'Unknown',
    
    cover: evandi,
    audioUrl: evan_di_unna_pethan
  },
  {
    id: '15',
    title: 'Hey Minnale',
    artist: 'Amaran',
    album: 'Unknown',
    
    cover: heyminnale,
    audioUrl: hey_minnale
  },
  {
    id: '16',
    title: 'Hey Sandakkara',
    artist: 'Iruthi sutru',
    album: 'Unknown',
    
    cover: eysanda,
    audioUrl: hey_sandakkara
  },
  {
    id: '17',
    title: 'Iayayo',
    artist: 'Paruthi Veeran',
    album: 'Unknown',
    
    cover: ayayo,
    audioUrl: iayayo
  },
  {
    id: '18',
    title: 'Innum Konjam Neram',
    artist: 'Mariyaan',
    album: 'Unknown',
    
    cover: inukon,
    audioUrl: innum_konjam_neram
  },
  {
    id: '19',
    title: 'Kaatrukulle',
    artist: 'Sarvam',
    album: 'Unknown',
    
    cover: kaatrkulle,
    audioUrl: kaatrukulle
  },
  {
    id: '20',
    title: 'Kadhal Vaithu',
    artist: 'Deepavali',
    album: 'Unknown',
    
    cover: kadhalvaithu,
    audioUrl: kadhal_vaithu
  },
  {
    id: '21',
    title: 'Kadhal Valarthen',
    artist: 'Manmadhan',
    album: 'Unknown',
    
    cover: kadhalvalarthen,
    audioUrl: kadhal_valarthen
  },
  {
    id: '22',
    title: 'Kadhal Vandhale MassTamilan',
    artist: 'Manmadhan',
    album: 'Unknown',
    
    cover: kadhalvanthale,
    audioUrl: kadhal_vandhale_masstamilan_org
  },
  {
    id: '23',
    title: 'Kannana Kanney MassTamilan',
    artist: 'Viswasam',
    album: 'Unknown',
    
    cover: kannanakane,
    audioUrl: kannana_kanney_masstamilan_fm
  },
  {
    id: '24',
    title: 'Loosu Penne MassTamilan',
    artist: 'Vallavan',
    album: 'Unknown',
    
    cover: loosupenne,
    audioUrl: loosu_penne_masstamilan_fm
  },
  {
    id: '25',
    title: 'Machaan Machaan',
    artist: 'Silambattam',
    album: 'Unknown',
    
    cover: machamacha,
    audioUrl: machaan_machaan
  },
  {
    id: '26',
    title: 'Mannipaaya',
    artist: 'VTV',
    album: 'Unknown',
    
    cover: manniapaya,
    audioUrl: mannipaaya
  },
  {
    id: '27',
    title: 'Meghame O Meghame',
    artist: 'madharasapattinam',
    album: 'Unknown',
    
    cover: megameohmegame,
    audioUrl: meghame_o_meghame
  },
  {
    id: '28',
    title: 'Minnalgal Koothadum',
    artist: 'Polladhavan',
    album: 'Unknown',
    
    cover: minnalgal,
    audioUrl: minnalgal_koothadum
  },
  {
    id: '29',
    title: 'Nee Singam Dhan MassTamilan',
    artist: 'paththu thala',
    album: 'Unknown',
    
    cover: nesingam,
    audioUrl: nee_singam_dhan_masstamilan_dev
  },
  {
    id: '30',
    title: 'Nenje Nenje',
    artist: 'Ayan',
    album: 'Unknown',
    
    cover: nenje,
    audioUrl: nenje_nenje
  },
  {
    id: '31',
    title: 'Nenjukkul Peidhidum MassTamilan',
    artist: 'Vaaranam Ayiram',
    album: 'Unknown',
    
    cover: nenjukkul,
    audioUrl: nenjukkul_peidhidum_masstamilan_com
  },
  {
    id: '32',
    title: 'No Money No Honey',
    artist: 'Vaanam',
    album: 'Unknown',
    
    cover: nomoney,
    audioUrl: no_money_no_honey
  },
  {
    id: '33',
    title: 'Ore Nyabagam',
    artist: 'Minnale',
    album: 'Unknown',
    
    cover: oregyabagamp,
    audioUrl: ore_nyabagam
  },
  {
    id: '34',
    title: 'Oru Punnagai Thane',
    artist: 'Theeratha Vilayattu Pillai',
    album: 'Unknown',
    
    cover: orupunnagai,
    audioUrl: oru_punnagai_thane
  },
  {
    id: '35',
    title: 'Paakathey Paakathey',
    artist: 'Varutha Padatha Valibar sangam',
    album: 'Unknown',
    
    cover: pakatha,
    audioUrl: paakathey_paakathey
  },
  {
    id: '36',
    title: 'Para Para',
    artist: 'Neer paravai',
    album: 'Unknown',
    
    cover: parapara,
    audioUrl: para_para
  },
  {
    id: '37',
    title: 'Poda Poda',
    artist: 'Iruthi Sutru',
    album: 'Unknown',
    
    cover:podapoda,
    audioUrl: poda_poda
  },
  {
    id: '38',
    title: 'Pogadhey Pogadhey',
    artist: 'Deepavali',
    album: 'Unknown',
    
    cover: pogathey,
    audioUrl: pogadhey_pogadhey
  },
  {
    id: '39',
    title: 'Poi Varavaa MassTamilan',
    artist: 'Thuppakki',
    album: 'Unknown',
    
    cover: poivarava,
    audioUrl: poi_varavaa_masstamilan_fm
  },
  {
    id: '40',
    title: 'Pookal Pookum',
    artist: 'Madarsapattinam',
    album: 'Unknown',
    
    cover: popkalpookum,
    audioUrl: pookal_pookum
  },
  {
    id: '41',
    title: 'Poongatre Poongatre',
    artist: 'Paiya',
    album: 'Unknown',
    
    cover: poonkatre,
    audioUrl: poongatre_poongatre
  },
  {
    id: '42',
    title: 'Poo Pookum Osai',
    artist: 'Minsara Kanavu',
    album: 'Unknown',
    
    cover: poopookumosaip,
    audioUrl: poo_pookum_osai
  },
  {
    id: '43',
    title: 'Rasaali',
    artist: 'AYM',
    album: 'Unknown',
    
    cover: rasali,
    audioUrl: rasaali
  },
  {
    id: '44',
    title: 'Sakkara MassTamilan',
    artist: 'NEW',
    album: 'Unknown',
    
    cover: sakkaraja,
    audioUrl: sakkara_masstamilan_com
  },
  {
    id: '45',
    title: 'Shakaklakka Baby',
    artist: 'Mudhalvan',
    album: 'Unknown',
    
    cover: sakalakababy,
    audioUrl: shakaklakka_baby
  },
  {
    id: '46',
    title: 'Siragugal',
    artist: 'Sarvam',
    album: 'Unknown',
    
    cover: siragugalsarvam,
    audioUrl: siragugal
  },
  {
    id: '47',
    title: 'Sudasuda Thooral',
    artist: 'Kedi billa killadi ranga',
    album: 'Unknown',
    
    cover: sudasudathooral,
    audioUrl: sudasuda_thooral
  },
  {
    id: '48',
    title: 'Thaakuthe',
    artist: 'Bana kathadi',
    album: 'Unknown',
    
    cover: thakuthe_kan_thakuthe,
    audioUrl: thaakuthe
  },
  {
    id: '49',
    title: 'Thenmerku Paruva Kaatru',
    artist: 'karuththamma',
    album: 'Unknown',
    
    cover: thenmerku,
    audioUrl: thenmerku_paruva_kaatru
  },
  {
    id: '50',
    title: 'Thooovaanam',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: thoovanam,
    audioUrl: thooovaanam
  },
  {
    id: '51',
    title: 'Un Mela Aasadhan',
    artist: 'Ayirathil Oruvan',
    album: 'Unknown',
    
    cover: un_mela_asathan,
    audioUrl: un_mela_aasadhan
  },
  {
    id: '52',
    title: 'Uyire En Uyire',
    artist: 'Thotti Jeya',
    album: 'Unknown',
    
    cover: uyire_enuyire,
    audioUrl: uyire_en_uyire
  },
  {
    id: '53',
    title: 'Vaanam',
    artist: 'Vaanam',
    album: 'Unknown',
    
    cover: vaanamdeivam,
    audioUrl: vaanam
  },
  {
    id: '54',
    title: 'Vennmathiye',
    artist: 'Minnale',
    album: 'Unknown',
    
    cover: venmathi,
    audioUrl: vennmathiye
  },
  {
    id: '55',
    title: 'Venpaniye',
    artist: 'Ko',
    album: 'Unknown',
    
    cover: venpaniye_,
    audioUrl: venpaniye
  },

  {
  id: '56',
  title: 'Anbenum',
  artist: 'Leo',
  album: 'Unknown',
  
  cover: anbenum,
  audioUrl: anbenum_masstamilan
},
{
  id: '57',
  title: 'Appane Pillaiyarappane',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: appane_pillaiyarappane_masstamilan
},
{
  id: '58',
  title: 'Arabic Kuthu',
  artist: 'Beast',
  album: 'Unknown',
  
  cover: arabickuthu,
  audioUrl: arabic_kuthu_masstamilan
},
{
  id: '59',
  title: 'Bhoomiku',
  artist: 'dishyum',
  album: 'Unknown',
  
  cover: bhoomiu,
  audioUrl: bhoomiku
},
{
  id: '60',
  title: 'Chikitu',
  artist: 'Koolie',
  album: 'Unknown',
  
  cover: chikutuvibe,
  audioUrl: chikitu_masstamilan
},
{
  id: '61',
  title: 'Chotta Chotta Nanaya',
  artist: 'Engeyum Eppothum',
  album: 'Unknown',
  
  cover: chotta,
  audioUrl: chotta_chotta_nanaya
},
{
  id: '62',
  title: 'En Idhayam',
  artist: 'Singham',
  album: 'Unknown',
  
  cover: enidhayam,
  audioUrl: en_idhayam
},
{
  id: '63',
  title: 'Hare Rama Hare Krishna',
  artist: 'Poda Podi',
  album: 'Unknown',
  
  cover: podapo,
  audioUrl: hare_rama_krishna
},
{
  id: '64',
  title: 'I Like You',
  artist: 'citizen',
  album: 'Unknown',
  
  cover: ilikeu,
  audioUrl: i_love_you
},
{
  id: '65',
  title: 'Idhu Varai',
  artist: 'Goa',
  album: 'Unknown',
  
  cover: ithuvarai,
  audioUrl: idhu_varai
},
{
  id: '66',
  title: 'Irumible Oru Idhayam',
  artist: 'Enthiran',
  album: 'Unknown',
  
  cover: irumbile,
  audioUrl: irumible_oru_idhayam
},
{
  id: '67',
  title: 'Kadal Anukkal',
  artist: 'Enthiran',
  album: 'Unknown',
  
  cover: kadhalanukkal,
  audioUrl: kadal_anukkal
},
{
  id: '68',
  title: 'Kandukondain Kandukondain',
  artist: 'Kandukondain Kandukondain',
  album: 'Unknown',
  
  cover: kandukonden,
  audioUrl: kandukondain_kandukondain
},
{
  id: '69',
  title: 'Kannamoochi Yenada',
  artist: 'Kandukondain Kandukondain',
  album: 'Unknown',
  
  cover: kannamoochi,
  audioUrl: kannamoochi_yenada
},
{
  id: '70',
  title: 'Karikalan Kala Pola',
  artist: 'Vettaikaran',
  album: 'Unknown',
  
  cover: karigalan,
  audioUrl: karikalan_kala_pola
},
{
  id: '71',
  title: 'Konjum Mainakkale',
  artist: 'Kandukondain Kandukondain',
  album: 'Unknown',
  
  cover: konjummainakkale,
  audioUrl: konjum_mainakkale
},
{
  id: '72',
  title: 'Mayam Seidhayo',
  artist: 'Velayutham',
  album: 'Unknown',
  
  cover: mayamseidayo,
  audioUrl: mayam_seidhayo
},
{
  id: '73',
  title: 'Naane Indhiran',
  artist: 'singham',
  album: 'Unknown',
  
  cover: naneindiran,
  audioUrl: naane_indhiran
},
{
  id: '74',
  title: 'Nenjangootti Neeye',
  artist: 'dishyum',
  album: 'Unknown',
  cover: bhoomiu,
  audioUrl: nenjangootti_neeye
},
{
  id: '75',
  title: 'Oru Thaali Ragam',
  artist: 'ithu namma alu',
  album: 'Unknown',
  
  cover: oruthalaire,
  audioUrl: oru_thaali_ragam
},
{
  id: '76',
  title: 'Poo Mudal Pen Varai',
  artist: 'theeratha vilayattu pillai',
  album: 'Unknown',
  
  cover: poomudhal,
  audioUrl: poo_mudal_pen_varai
},
{
  id: '77',
  title: 'Sollamal Thottu Chellum Thendral',
  artist: 'dheena',
  album: 'Unknown',
  
  cover: sollamal,
  audioUrl: sollamal_thottu
},
{
  id: '78',
  title: 'Thalattum Katre Vaa',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: thalatum,
  audioUrl: thalattum_katre_vaa
},
{
  id: '79',
  title: 'Thattan Thattaan',
  artist: 'karnan',
  album: 'Unknown',
  
  cover: thattanthatan,
  audioUrl: thattan_thattaan
},
{
  id: '80',
  title: 'Unnai Paartha Pinbu',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: unnaipatha_cover,
  audioUrl: unnai_paartha_pinbu
},
{
  id: '81',
  title: 'Unnoodu Vaazha',
  artist: 'Amarkalam',
  album: 'Unknown',
  
  cover: unnoduvazhatha,
  audioUrl: unnoodu_vaazha
},
{
  id: '82',
  title: 'Urugudhe Maragudhe',
  artist: 'veyil',
  album: 'Unknown',
  
  cover: urukuthey,
  audioUrl: urugudhe_maragudhe
},
{
  id: '83',
  title: 'Vaa Rayil Vida Polaama',
  artist: 'pariyerum perumal',
  album: 'Unknown',
  
  cover: varayil,
  audioUrl: vaa_rayil_vida_polaama
},
{
  id: '84',
  title: 'Velicha Poove',
  artist: 'ethirneechal',
  album: 'Unknown',
  
  cover: velichapoove,
  audioUrl: velicha_poove
},
{
  id: '85',
  title: 'Veyilodu Vilayadi',
  artist: 'veyil',
  album: 'Unknown',
  
  cover:veyilodu,
  audioUrl: veyilodu_vilayadi
},

{
  id: '87',
  title: 'Vithi Moodi Yosithaal',
  artist: 'Ayan',
  album: 'Unknown',
  cover: vizhimoodi,
  audioUrl: vithi_moodi_yosithaal
},
{
  id: '88',
  title: 'Vizhigalil Aruginil Vaanam',
  artist: 'azhagiya theeye',
  album: 'Unknown',
  
  cover: vizhiganil,
  audioUrl: vizhigalil_aruginil_vaanam
},
{
  id: '89',
  title: 'Vizhiyil Un Vizhiyil',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: vizhiyil,
  audioUrl: vizhiyil_un_vizhiyil
},
{
  id: '90',
    title: 'Yen Minukki MassTamilan',
   artist: 'asuran',
    album: 'Unknown',
    
    cover: yen_minukki,
    audioUrl: yen_minukki_masstamilan_org
  },
{
  id: '91',
  title: 'Asai Asai',
  artist: 'Dhool',
  album: 'Unknown',
  cover: asai_asai_cover,
  audioUrl: asai_asai
},
{
  id: '92',
  title: 'Anbe Sivam',
  artist: 'anbe sivam',
  album: 'Unknown',
  cover: anbe_sivam_cover,
  audioUrl: anbe_sivam
},
{
  id: '93',
  title: 'Anbe Anbe',
  artist: 'jeans',
  album: 'Unknown',
  cover: anbe_anbe_cover,
  audioUrl: anbe_anbe
},
{
  id: '94',
  title: 'Antha Nilavathan MassTamilan.io',
  artist: 'Unknown',
  album: 'Unknown',
  cover: antha_nilavathan_masstamilan_io_cover,
  audioUrl: antha_nilavathan_masstamilan_io
},
{
  id: '95',
  title: 'Azhagooril Poothavale',
  artist: 'thirumalai',
  album: 'Unknown',
  cover: azhagooril_poothavale_cover,
  audioUrl: azhagooril_poothavale
},
{
  id: '96',
  title: 'Dhimsu Katta',
  artist: 'thirumalai',
  album: 'Unknown',
  cover: dhimsu_katta_cover,
  audioUrl: dhimsu_katta
},
{
  id: '97',
  title: 'En Uyire',
  artist: 'uyire',
  album: 'Unknown',
  cover: en_uyire_cover,
  audioUrl: en_uyire
},
{
  id: '98',
  title: 'Ennake Ennake',
  artist: 'jeans',
  album: 'Unknown',
  cover: ennake_ennake_cover,
  audioUrl: ennake_ennake
},
{
  id: '99',
  title: 'Ennavale Ennavale',
  artist: 'MR.romeo',
  album: 'Unknown',
  cover: ennavale_ennavale_cover,
  audioUrl: ennavale_ennavale
},
{
  id: '100',
  title: 'Ennodu Laila',
  artist: 'Badri',
  album: 'Unknown',
  cover: ennodu_laila_cover,
  audioUrl: ennodu_laila
},
{
  id: '101',
  title: 'Idhuthanaa',
  artist: 'saami',
  album: 'Unknown',
  cover: idhuthanaa_cover,
  audioUrl: idhuthanaa
},
{
  id: '102',
  title: 'Ilankaathu Veesuthey',
  artist: 'Pithamagan',
  album: 'Unknown',
  cover: ilankaathu_veesuthey_cover,
  audioUrl: ilankaathu_veesuthey
},
{
  id: '103',
  title: 'Kaadhal Vandhal',
  artist: 'iyarkai',
  album: 'Unknown',
  cover: kaadhal_vandhal_cover,
  audioUrl: kaadhal_vandhal
},
{
  id: '104',
  title: 'Kadhal Oviyam MassTamilan.io',
  artist: 'alaigal oivathillai',
  album: 'Unknown',
  cover: kadhal_oviyam_masstamilan_io_cover,
  audioUrl: kadhal_oviyam_masstamilan_io
},
{
  id: '105',
  title: 'Kadhal Solvadhu',
  artist: 'Badri',
  album: 'Unknown',
  cover: kadhal_solvadhu_cover,
  audioUrl: kadhal_solvadhu
},
{
  id: '106',
  title: 'Kammaniye MassTamilan.com',
  artist: '6 to 60',
  album: 'Unknown',
  cover: kammaniye_masstamilan_com_cover,
  audioUrl: kammaniye_masstamilan_com
},
{
  id: '107',
  title: 'Kannoodu Kanbarellam',
  artist: 'jeans',
  album: 'Unknown',
  cover: kannoodu_kanbarellam_cover,
  audioUrl: kannoodu_kanbarellam
},
{
  id: '108',
  title: 'Malligaiye Malligaiye',
  artist: 'ah aah',
  album: 'Unknown',
  cover: malligaiye_malligaiye_cover,
  audioUrl: malligaiye_malligaiye
},
{
  id: '109',
  title: 'Margazhi Thingal',
  artist: 'sangamam',
  album: 'Unknown',
  cover: margazhi_thingal_cover,
  audioUrl: margazhi_thingal
},
{
  id: '110',
  title: 'Master the Blaster MassTamilan.io',
  artist: 'Master',
  album: 'Unknown',
  cover: master_the_blaster_masstamilan_io_cover,
  audioUrl: master_the_blaster_masstamilan_io
},
{
  id: '111',
  title: 'May Madham',
  artist: 'shajahan',
  album: 'Unknown',
  cover: may_madham_cover,
  audioUrl: may_madham
},
{
  id: '112',
  title: 'Mazhai Varum Arikuri',
  artist: 'Veppam',
  album: 'Unknown',
  cover: mazhai_varum_arikuri_cover,
  audioUrl: mazhai_varum_arikuri
},
{
  id: '113',
  title: 'Melliname Mellinamae',
  artist: 'shajahan',
  album: 'Unknown',
  cover: melliname_mellinamae_cover,
  audioUrl: melliname_mellinamae
},
{
  id: '114',
  title: 'Minnalai Pidithu',
  artist: 'shajahan',
  album: 'Unknown',
  cover: minnalai_pidithu_cover,
  audioUrl: minnalai_pidithu
},
{
  id: '115',
  title: 'Munbe Vaa',
  artist: 'sillunu oru kadhal',
  album: 'Unknown',
  cover: munbe_vaa_cover,
  audioUrl: munbe_vaa
},
{
  id: '116',
  title: 'Nee Kaatru Naan Maram MassTamilan.com',
  artist: 'vijay',
  album: 'Unknown',
  cover: nee_kaatru_naan_maram_masstamilan_com_cover,
  audioUrl: nee_kaatru_naan_maram_masstamilan_com
},
{
  id: '117',
  title: 'Nee Thoongum Naerathil MassTamilan.com',
  artist: 'manasellam',
  album: 'Unknown',
  cover: nee_thoongum_naerathil_masstamilan_com_cover,
  audioUrl: nee_thoongum_naerathil_masstamilan_com
},
{
  id: '118',
  title: 'Nenjinline Nenjinline',
  artist: 'uyire',
  album: 'Unknown',
  cover: nenjinline_nenjinline_cover,
  audioUrl: nenjinline_nenjinline
},
{
  id: '119',
  title: 'New York Nagaram',
  artist: 'sillunu oru kadhal',
  album: 'Unknown',
  cover: new_york_nagaram_cover,
  audioUrl: new_york_nagaram
},
{
  id: '120',
  title: 'Nilavai Kondu Vaa',
  artist: 'vaali',
  album: 'Unknown',
  cover: nilavai_kondu_vaa_cover,
  audioUrl: nilavai_kondu_vaa
},
{
  id: '121',
  title: 'Oru Koottu Kili',
  artist: 'rajni',
  album: 'Unknown',
  cover: oru_koottu_kili_cover,
  audioUrl: oru_koottu_kili
},
{
  id: '122',
  title: 'Oru Thadavai',
  artist: 'Unknown',
  album: 'Unknown',
  cover: oru_thadavai_cover,
  audioUrl: oru_thadavai
},
{
  id: '123',
  title: 'Oru Jeevan Azhaithathu MassTamilan.io',
  artist: 'Unknown',
  album: 'Unknown',
  cover: oru_jeevan_azhaithathu_masstamilan_io_cover,
  audioUrl: oru_jeevan_azhaithathu_masstamilan_io
},
{
  id: '124',
  title: 'Poi Solla Intha Manasukku',
  artist: 'Unknown',
  album: 'Unknown',
  cover: poi_solla_intha_manasukku_cover,
  audioUrl: poi_solla_intha_manasukku
},
{
  id: '125',
  title: 'Poovaasam',
  artist: 'Unknown',
  album: 'Unknown',
  cover: poovaasam_cover,
  audioUrl: poovaasam
},
{
  id: '126',
  title: 'Poovukkul',
  artist: 'Unknown',
  album: 'Unknown',
  cover: poovukkul_cover,
  audioUrl: poovukkul
},
{
  id: '127',
  title: 'Pottu Vaithu',
  artist: 'Unknown',
  album: 'Unknown',
  cover: pottu_vaithu_cover,
  audioUrl: pottu_vaithu
},
{
  id: '128',
  title: 'Pudichirukku',
  artist: 'Unknown',
  album: 'Unknown',
  cover: pudichirukku_cover,
  audioUrl: pudichirukku
},
{
  id: '129',
  title: 'Sahana Saral Thoo',
  artist: 'Unknown',
  album: 'Unknown',
  cover: sahana_saral_thoo_cover,
  audioUrl: sahana_saral_thoo
},
{
  id: '130',
  title: 'Sandhossa Kanneere',
  artist: 'Unknown',
  album: 'Unknown',
  cover: sandhossa_kanneere_cover,
  audioUrl: sandhossa_kanneere
},
{
  id: '131',
  title: 'Senthoora Poove',
  artist: 'Unknown',
  album: 'Unknown',
  cover: senthoora_poove_cover,
  audioUrl: senthoora_poove
},
{
  id: '132',
  title: 'Sona Sona',
  artist: 'Unknown',
  album: 'Unknown',
  cover: sona_sona_cover,
  audioUrl: sona_sona
},
{
  id: '133',
  title: 'Thaiyya Thaiyya',
  artist: 'Unknown',
  album: 'Unknown',
  cover: thaiyya_thaiyya_cover,
  audioUrl: thaiyya_thaiyya
},
{
  id: '134',
  title: 'Thamthakka Theenthakkathom',
  artist: 'Unknown',
  album: 'Unknown',
  cover: thamthakka_theenthakkathom_cover,
  audioUrl: thamthakka_theenthakkathom
},
{
  id: '135',
  title: 'Uyerin Uyere',
  artist: 'Unknown',
  album: 'Unknown',
  cover: uyerin_uyere_cover,
  audioUrl: uyerin_uyere
},
{
  id: '136',
  title: 'Vaathi Raid MassTamilan.io',
  artist: 'Master',
  album: 'Unknown',
  cover: vaathi_raid_masstamilan_io_cover,
  audioUrl: vaathi_raid_masstamilan_io
},
{
  id: '137',
  title: 'Yea Nenjea',
  artist: 'Unknown',
  album: 'Unknown',
  cover: yea_nenjea_cover,
  audioUrl: yea_nenjea
}
]