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





// Sample audio files - Replace these URLs with your actual audio files
export const songs: Song[] = [
  {
    id: '1',
    title: 'Aedho Saigirai',
    artist: 'Unknown',
    album: 'Unknown',
    cover: aedho,
    audioUrl: aedho_saigirai
  },
  {
    id: '2',
    title: 'Alaipayuthey Kanna',
    artist: 'Unknown',
    album: 'Unknown',
    cover: alai,
    audioUrl: alaipayuthey_kanna
  },
  {
    id: '3',
    title: 'Ammadi Athadi MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    cover: ammadi,
    audioUrl: ammadi_athadi_masstamilan_org
  },
  {
    id: '4',
    title: 'Antartica MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    cover: andartica,
    audioUrl: antartica_masstamilan_fm
  },
  {
    id: '5',
    title: 'Arabu Naad',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: arabu,
    audioUrl: arabu_naad
  },
  {
    id: '6',
    title: 'Azhakana Rasathaiye',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: azhagna,
    audioUrl: azhakana_rasathaiye
  },
  {
    id: '7',
    title: 'Chinna Chinnathai Penn',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: chiinachinna,
    audioUrl: chinna_chinnathai_penn
  },
  {
    id: '8',
    title: 'Chudithar Aninthu Vanthu',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: chudi,
    audioUrl: chudithar_aninthu_vanthu
  },
  {
    id: '9',
    title: 'En Iniya Thanimaye MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: eniniya,
    audioUrl: en_iniya_thanimaye_masstamilan_io
  },
  {
    id: '10',
    title: 'En Jannal Vandha',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: enjannal,
    audioUrl: en_jannal_vandha
  },
  {
    id: '11',
    title: 'En Jeevan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: en_jeevan
  },
  {
    id: '12',
    title: 'Ennamo Yeatho',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: ennamo_yeatho
  },
  {
    id: '13',
    title: 'Enna Vilai',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: enna_vilai
  },
  {
    id: '14',
    title: 'Evan Di Unna Pethan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: evan_di_unna_pethan
  },
  {
    id: '15',
    title: 'Hey Minnale',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: hey_minnale
  },
  {
    id: '16',
    title: 'Hey Sandakkara',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: hey_sandakkara
  },
  {
    id: '17',
    title: 'Iayayo',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: iayayo
  },
  {
    id: '18',
    title: 'Innum Konjam Neram',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: innum_konjam_neram
  },
  {
    id: '19',
    title: 'Kaatrukulle',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kaatrukulle
  },
  {
    id: '20',
    title: 'Kadhal Vaithu',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kadhal_vaithu
  },
  {
    id: '21',
    title: 'Kadhal Valarthen',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kadhal_valarthen
  },
  {
    id: '22',
    title: 'Kadhal Vandhale MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kadhal_vandhale_masstamilan_org
  },
  {
    id: '23',
    title: 'Kannana Kanney MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kannana_kanney_masstamilan_fm
  },
  {
    id: '24',
    title: 'Loosu Penne MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: loosu_penne_masstamilan_fm
  },
  {
    id: '25',
    title: 'Machaan Machaan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: machaan_machaan
  },
  {
    id: '26',
    title: 'Mannipaaya',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: mannipaaya
  },
  {
    id: '27',
    title: 'Meghame O Meghame',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: meghame_o_meghame
  },
  {
    id: '28',
    title: 'Minnalgal Koothadum',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: minnalgal_koothadum
  },
  {
    id: '29',
    title: 'Nee Singam Dhan MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: nee_singam_dhan_masstamilan_dev
  },
  {
    id: '30',
    title: 'Nenje Nenje',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: nenje_nenje
  },
  {
    id: '31',
    title: 'Nenjukkul Peidhidum MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: nenjukkul_peidhidum_masstamilan_com
  },
  {
    id: '32',
    title: 'No Money No Honey',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: no_money_no_honey
  },
  {
    id: '33',
    title: 'Ore Nyabagam',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: ore_nyabagam
  },
  {
    id: '34',
    title: 'Oru Punnagai Thane',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: oru_punnagai_thane
  },
  {
    id: '35',
    title: 'Paakathey Paakathey',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: paakathey_paakathey
  },
  {
    id: '36',
    title: 'Para Para',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: para_para
  },
  {
    id: '37',
    title: 'Poda Poda',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: poda_poda
  },
  {
    id: '38',
    title: 'Pogadhey Pogadhey',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: pogadhey_pogadhey
  },
  {
    id: '39',
    title: 'Poi Varavaa MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: poi_varavaa_masstamilan_fm
  },
  {
    id: '40',
    title: 'Pookal Pookum',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: pookal_pookum
  },
  {
    id: '41',
    title: 'Poongatre Poongatre',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: poongatre_poongatre
  },
  {
    id: '42',
    title: 'Poo Pookum Osai',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: poo_pookum_osai
  },
  {
    id: '43',
    title: 'Rasaali',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: rasaali
  },
  {
    id: '44',
    title: 'Sakkara MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: sakkara_masstamilan_com
  },
  {
    id: '45',
    title: 'Shakaklakka Baby',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: shakaklakka_baby
  },
  {
    id: '46',
    title: 'Siragugal',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: siragugal
  },
  {
    id: '47',
    title: 'Sudasuda Thooral',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: sudasuda_thooral
  },
  {
    id: '48',
    title: 'Thaakuthe',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: thaakuthe
  },
  {
    id: '49',
    title: 'Thenmerku Paruva Kaatru',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: thenmerku_paruva_kaatru
  },
  {
    id: '50',
    title: 'Thooovaanam',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: thooovaanam
  },
  {
    id: '51',
    title: 'Un Mela Aasadhan',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: un_mela_aasadhan
  },
  {
    id: '52',
    title: 'Uyire En Uyire',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: uyire_en_uyire
  },
  {
    id: '53',
    title: 'Vaanam',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: vaanam
  },
  {
    id: '54',
    title: 'Vennmathiye',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: vennmathiye
  },
  {
    id: '55',
    title: 'Venpaniye',
    artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: venpaniye
  },

  {
  id: '56',
  title: 'Anbenum',
  artist: 'Unknown',
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
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: arabickuthu,
  audioUrl: arabic_kuthu_masstamilan
},
{
  id: '59',
  title: 'Bhoomiku',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: bhoomiu,
  audioUrl: bhoomiku
},
{
  id: '60',
  title: 'Chikitu',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: chikutuvibe,
  audioUrl: chikitu_masstamilan
},
{
  id: '61',
  title: 'Chotta Chotta Nanaya',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: chotta,
  audioUrl: chotta_chotta_nanaya
},
{
  id: '62',
  title: 'En Idhayam',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: enidhayam,
  audioUrl: en_idhayam
},
{
  id: '63',
  title: 'Hare Rama Hare Krishna',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: hare_rama_krishna
},
{
  id: '64',
  title: 'I Love You',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: i_love_you
},
{
  id: '65',
  title: 'Idhu Varai',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: idhu_varai
},
{
  id: '66',
  title: 'Irumible Oru Idhayam',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: irumible_oru_idhayam
},
{
  id: '67',
  title: 'Kadal Anukkal',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: kadal_anukkal
},
{
  id: '68',
  title: 'Kandukondain Kandukondain',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: kandukondain_kandukondain
},
{
  id: '69',
  title: 'Kannamoochi Yenada',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: kannamoochi_yenada
},
{
  id: '70',
  title: 'Karikalan Kala Pola',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: karikalan_kala_pola
},
{
  id: '71',
  title: 'Konjum Mainakkale',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: konjum_mainakkale
},
{
  id: '72',
  title: 'Mayam Seidhayo',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: mayam_seidhayo
},
{
  id: '73',
  title: 'Naane Indhiran',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: naane_indhiran
},
{
  id: '74',
  title: 'Nenjangootti Neeye',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: nenjangootti_neeye
},
{
  id: '75',
  title: 'Oru Thaali Ragam',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: oru_thaali_ragam
},
{
  id: '76',
  title: 'Poo Mudal Pen Varai',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: poo_mudal_pen_varai
},
{
  id: '77',
  title: 'Sollamal Thottu Chellum Thendral',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: sollamal_thottu
},
{
  id: '78',
  title: 'Thalattum Katre Vaa',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: thalattum_katre_vaa
},
{
  id: '79',
  title: 'Thattan Thattaan',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: thattan_thattaan
},
{
  id: '80',
  title: 'Unnai Paartha Pinbu',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: unnai_paartha_pinbu
},
{
  id: '81',
  title: 'Unnoodu Vaazha',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: unnoodu_vaazha
},
{
  id: '82',
  title: 'Urugudhe Maragudhe',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: urugudhe_maragudhe
},
{
  id: '83',
  title: 'Vaa Rayil Vida Polaama',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: vaa_rayil_vida_polaama
},
{
  id: '84',
  title: 'Velicha Poove',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: velicha_poove
},
{
  id: '85',
  title: 'Veyilodu Vilayadi',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: veyilodu_vilayadi
},





{
  id: '87',
  title: 'Vithi Moodi Yosithaal',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: vithi_moodi_yosithaal
},
{
  id: '88',
  title: 'Vizhigalil Aruginil Vaanam',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: vizhigalil_aruginil_vaanam
},
{
  id: '89',
  title: 'Vizhiyil Un Vizhiyil',
  artist: 'Unknown',
  album: 'Unknown',
  
  cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
  audioUrl: vizhiyil_un_vizhiyil
},
{
  id: '90',
    title: 'Yen Minukki MassTamilan',
   artist: 'Unknown',
    album: 'Unknown',
    
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: yen_minukki_masstamilan_org
  }

];