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


// Sample audio files - Replace these URLs with your actual audio files
export const songs: Song[] = [
  {
    id: '1',
    title: 'Aedho Saigirai',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: aedho_saigirai
  },
  {
    id: '2',
    title: 'Alaipayuthey Kanna',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: alaipayuthey_kanna
  },
  {
    id: '3',
    title: 'Ammadi Athadi MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: ammadi_athadi_masstamilan_org
  },
  {
    id: '4',
    title: 'Antartica MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: antartica_masstamilan_fm
  },
  {
    id: '5',
    title: 'Arabu Naad',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: arabu_naad
  },
  {
    id: '6',
    title: 'Azhakana Rasathaiye',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: azhakana_rasathaiye
  },
  {
    id: '7',
    title: 'Chinna Chinnathai Penn',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: chinna_chinnathai_penn
  },
  {
    id: '8',
    title: 'Chudithar Aninthu Vanthu',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: chudithar_aninthu_vanthu
  },
  {
    id: '9',
    title: 'En Iniya Thanimaye MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: en_iniya_thanimaye_masstamilan_io
  },
  {
    id: '10',
    title: 'En Jannal Vandha',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: en_jannal_vandha
  },
  {
    id: '11',
    title: 'En Jeevan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: en_jeevan
  },
  {
    id: '12',
    title: 'Ennamo Yeatho',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: ennamo_yeatho
  },
  {
    id: '13',
    title: 'Enna Vilai',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: enna_vilai
  },
  {
    id: '14',
    title: 'Evan Di Unna Pethan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: evan_di_unna_pethan
  },
  {
    id: '15',
    title: 'Hey Minnale',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: hey_minnale
  },
  {
    id: '16',
    title: 'Hey Sandakkara',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: hey_sandakkara
  },
  {
    id: '17',
    title: 'Iayayo',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: iayayo
  },
  {
    id: '18',
    title: 'Innum Konjam Neram',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: innum_konjam_neram
  },
  {
    id: '19',
    title: 'Kaatrukulle',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kaatrukulle
  },
  {
    id: '20',
    title: 'Kadhal Vaithu',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kadhal_vaithu
  },
  {
    id: '21',
    title: 'Kadhal Valarthen',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kadhal_valarthen
  },
  {
    id: '22',
    title: 'Kadhal Vandhale MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kadhal_vandhale_masstamilan_org
  },
  {
    id: '23',
    title: 'Kannana Kanney MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: kannana_kanney_masstamilan_fm
  },
  {
    id: '24',
    title: 'Loosu Penne MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: loosu_penne_masstamilan_fm
  },
  {
    id: '25',
    title: 'Machaan Machaan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: machaan_machaan
  },
  {
    id: '26',
    title: 'Mannipaaya',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: mannipaaya
  },
  {
    id: '27',
    title: 'Meghame O Meghame',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: meghame_o_meghame
  },
  {
    id: '28',
    title: 'Minnalgal Koothadum',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: minnalgal_koothadum
  },
  {
    id: '29',
    title: 'Nee Singam Dhan MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: nee_singam_dhan_masstamilan_dev
  },
  {
    id: '30',
    title: 'Nenje Nenje',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: nenje_nenje
  },
  {
    id: '31',
    title: 'Nenjukkul Peidhidum MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: nenjukkul_peidhidum_masstamilan_com
  },
  {
    id: '32',
    title: 'No Money No Honey',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: no_money_no_honey
  },
  {
    id: '33',
    title: 'Ore Nyabagam',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: ore_nyabagam
  },
  {
    id: '34',
    title: 'Oru Punnagai Thane',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: oru_punnagai_thane
  },
  {
    id: '35',
    title: 'Paakathey Paakathey',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: paakathey_paakathey
  },
  {
    id: '36',
    title: 'Para Para',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: para_para
  },
  {
    id: '37',
    title: 'Poda Poda',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: poda_poda
  },
  {
    id: '38',
    title: 'Pogadhey Pogadhey',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: pogadhey_pogadhey
  },
  {
    id: '39',
    title: 'Poi Varavaa MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: poi_varavaa_masstamilan_fm
  },
  {
    id: '40',
    title: 'Pookal Pookum',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: pookal_pookum
  },
  {
    id: '41',
    title: 'Poongatre Poongatre',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: poongatre_poongatre
  },
  {
    id: '42',
    title: 'Poo Pookum Osai',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: poo_pookum_osai
  },
  {
    id: '43',
    title: 'Rasaali',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: rasaali
  },
  {
    id: '44',
    title: 'Sakkara MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: sakkara_masstamilan_com
  },
  {
    id: '45',
    title: 'Shakaklakka Baby',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: shakaklakka_baby
  },
  {
    id: '46',
    title: 'Siragugal',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: siragugal
  },
  {
    id: '47',
    title: 'Sudasuda Thooral',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: sudasuda_thooral
  },
  {
    id: '48',
    title: 'Thaakuthe',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: thaakuthe
  },
  {
    id: '49',
    title: 'Thenmerku Paruva Kaatru',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: thenmerku_paruva_kaatru
  },
  {
    id: '50',
    title: 'Thooovaanam',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: thooovaanam
  },
  {
    id: '51',
    title: 'Un Mela Aasadhan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: un_mela_aasadhan
  },
  {
    id: '52',
    title: 'Uyire En Uyire',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: uyire_en_uyire
  },
  {
    id: '53',
    title: 'Vaanam',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: vaanam
  },
  {
    id: '54',
    title: 'Vennmathiye',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: vennmathiye
  },
  {
    id: '55',
    title: 'Venpaniye',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: venpaniye
  },

  {
    id: '57',
    title: 'Yen Minukki MassTamilan',
    artist: 'Unknown',
    album: 'Unknown',
    duration: 240,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: yen_minukki_masstamilan_org
  }
];