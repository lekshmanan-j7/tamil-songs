import { Song } from '../types/music';
// import sahsra from '../../public/assets/songs/vishnu-sahasranamam.mp3';
import eniniyathanimaiye from '../../public/assets/songs/vishnu-sahasranamam.mp3';
import mannipaya from '../../public/assets/songs/Mannipaaya.mp3';
import nenjenenje from '../../public/assets/songs/Nenje Nenje.mp3';
import nenjukul from '../../public/assets/songs/Nenjukkul-Peidhidum-MassTamilan.com.mp3';
import parapara from '../../public/assets/songs/Para-Para.mp3';
import rasali from '../../public/assets/songs/Rasaali.mp3';

// Sample audio files - Replace these URLs with your actual audio files
export const songs: Song[] = [
  {
    id: '1',
    title: 'Mannipaya',
    artist: 'A.R.rahman',
    album: 'VTV',
    duration: 243,
    cover: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl:mannipaya 
  },
  {
    id: '2',
    title: 'Nenje Nenje',
    artist: 'harris',
    album: 'ayan',
    duration: 198,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: nenjenenje
  },
  {
    id: '3',
    title: 'Nenjukul',
    artist: 'harris',
    album: 'Vaaranam Ayiram',
    duration: 287,
    cover: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: nenjukul
  },
  {
    id: '4',
    title: 'para para',
    artist: 'G.V.prakash',
    album: 'Neer paravai',
    duration: 215,
    cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: parapara 
  },
  {
    id: '5',
    title: 'Rasali',
    artist: 'A.R.rahman',
    album: 'AYM',
    duration: 261,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: rasali 
  },
  {
    id: '5',
    title: 'En iniya Thanimaiye',
    artist: 'A.R.rahman',
    album: 'AYM',
    duration: 261,
    cover: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    audioUrl: eniniyathanimaiye 
  },
 
];