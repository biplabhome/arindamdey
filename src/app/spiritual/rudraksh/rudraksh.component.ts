import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  mukhi: string;
  rulingGod: string;
  rulingPlanet: string;
  beejamantra: string;
  majorbenefit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  {mukhi: '1 Mukhi', rulingGod: 'Shiva', rulingPlanet: 'Sun', beejamantra: 'Om Hreem Namah'
  , majorbenefit: 'Enlighten the Super Consciousness, provides improved concentration and '
  +'mental structure changes specific to renunciation from worldly affairs. The wearer '
  +'enjoys all comforts at his command but still remains unattached.'},
  
  {mukhi: '2 Mukhi', rulingGod: 'Ardhnareeshwar', rulingPlanet: 'Moon', beejamantra: 'Om Namah'
  , majorbenefit: 'Blesses the wearer with UNITY. It could be related to Guru-Shishya, '
  +'parents-children, husband-wife or friends. Maintaining ONENESS is its peculiarity.'},
  
  {mukhi: '3 Mukhi', rulingGod: 'Agni', rulingPlanet: 'Mars', beejamantra: 'Om Kleem Namah'
  , majorbenefit: 'The wearer gets free from sins or wrongs from his life and returns to purity .'
  +' Ideal for those who suffer from inferior complexes, subjective fear, guilt and depression.'},
  
  {mukhi: '4 Mukhi', rulingGod: 'Brahma', rulingPlanet: 'Mercury', beejamantra: 'Om Hreem Namah'
  , majorbenefit: 'The wearer gains power of creativity when blessed. Increases memory power, wit and intelligence.'},
  
  {mukhi: '5 Mukhi', rulingGod: 'Kalaagni Rudra', rulingPlanet: 'Jupiter', beejamantra: 'Om Hreem Namah'
  , majorbenefit: 'Wearer gains health and peace. Lowers blood pressure.'},
  
  {mukhi: '6 Mukhi', rulingGod: 'Kartikeya', rulingPlanet: 'Venus', beejamantra: 'Om Hreem Hum Namah'
  , majorbenefit: 'Saves from the emotional trauma of worldly sorrows and gives learning, wisdom and '
  +'knowledge. Affects understanding and appreciation of Love, Sexual Pleasure, Music and Personal Relationships.'},
  
  {mukhi: '7 Mukhi', rulingGod: 'Mahalaxmi', rulingPlanet: 'Saturn', beejamantra: 'Om Hum Namah'
  , majorbenefit: 'It should be worn by those who are suffering from miseries pertaining to body, '
  +'finance and mental set-up. By wearing this man can progress in business and service and spends his life happily.'},
  
  {mukhi: '8 Mukhi', rulingGod: 'Ganesh', rulingPlanet: 'Rahu', beejamantra: 'Om Hum Namah'
  , majorbenefit: 'Removes all obstacles and brings success in all undertakings. It gives the wearer '
  +'all kinds of attainments - Riddhies and Siddhies . His opponents are finished i.e. the minds or '
  +'intentions of his opponents are changed.'},
  
  {mukhi: '9 Mukhi', rulingGod: 'Durga', rulingPlanet: 'Ketu', beejamantra: 'Om Hreem Hum Namah'
  , majorbenefit: 'Wearer is blessed with lot of energy, powers, Dynamism and fearlessness, which '
  +'are useful to live a life of success.'},
  
  {mukhi: '10 Mukhi', rulingGod: 'Vishnu', rulingPlanet: 'None', beejamantra: 'Om Hreem Namah'
  , majorbenefit: 'This contains the influence of ten incarnations and the ten directions. It works '
  +'like a shield on one\'s body and drives evils away.'},
  
  {mukhi: '11 Mukhi', rulingGod: 'Hanuman', rulingPlanet: 'None', beejamantra: 'Om Hreem Hum Namah'
  , majorbenefit: 'Blesses wearer with wisdom, right judgment, powerful vocabulary, adventurous life, '
  +'fearlessness and success. Above all, it also protects from accidental death. It also helps in '
  +'Meditation and removes the problems of yogic practices.'},
  
  {mukhi: '12 Mukhi', rulingGod: 'Sun', rulingPlanet: 'Aum Kraum', beejamantra: 'Sraum Raum Surya Namah'
  , majorbenefit: 'Wearer gets the quality of the sun - to rule and to move continuously with brilliant '
  +'radiance and strength. Good for ministers, politicians, administrators, businessmen and executives. '
  +'Removes worry, suspicion and fear. Increases self image and motivation.'},
  
  {mukhi: '13 Mukhi', rulingGod: 'Indra', rulingPlanet: 'Venus', beejamantra: 'Om Hreem Namah'
  , majorbenefit: 'Showers all possible comforts of life one can ever desire. It gives riches and honor '
  +'and fulfills all the earthly desires and gives eight accomplishments ( Siddhies), and the god cupid '
  +'( Kamadeva) pleases with the man who wears it.. It is helpful for meditation and spiritual and materialistic attainments'},
  
  {mukhi: '14 Mukhi', rulingGod: 'Hanuman', rulingPlanet: 'Saturn', beejamantra: 'Om Namah'
  , majorbenefit: 'Most precious divine gem - Deva Mani. It awakens the sixth sense organ by which the '
  +'wearer foresees the future happenings. Its wearer never fails in his decisions. Its wearer gets rid of '
  +'all the calamities, miseries, worries. It protects from ghosts, evil spirits and black magic . '
  +'It provides the wearer safety, security and riches and self power.'},
  
  {mukhi: '15 Mukhi', rulingGod: 'Lord Pashupati', rulingPlanet: 'None', beejamantra: 'Om Namah Shivay'
  , majorbenefit: 'This represents Lord Pashupati and is specially beneficial for economic progress. '
  +'Its possessor is neither bereft of wealth nor inflicted by any kinds of skin diseases.'},
  
  {mukhi: '16 Mukhi', rulingGod: 'Lord Ram', rulingPlanet: 'None', beejamantra: 'Om Namah Shivaya'
  , majorbenefit: 'It represents victory and the possessor is never affected by heat or cold. '
  +'It is especially useful for the saints living in jungles. The house in which it is kept is free from fire, theft or robbery.'},
  
  {mukhi: '17 Mukhi', rulingGod: 'Vishvakarma', rulingPlanet: 'None', beejamantra: 'Om Namah Shivaya'
  , majorbenefit: 'It represents Vishvakarma the builder of this world. It is very effective in gaining '
  +'unexpected money. It is specially useful in attaining property, vehicles and all physical assets.'},
  
  {mukhi: '18 Mukhi', rulingGod: 'Mother Earth', rulingPlanet: 'None', beejamantra: 'Om Namah Shivaya'
  , majorbenefit: 'It represents the mother earth. The possessor remains happy and healthy. It is specially '
  +'beneficial for the pregnant women in protecting their child.'},
  
  {mukhi: '19 Mukhi', rulingGod: 'Lord Narayana', rulingPlanet: 'None', beejamantra: 'Om Namah Shivaya'
  , majorbenefit: 'It represents Lord Narayana. The possessor is bestowed with all worldly pleasures. '
  +'There is no scarcity in their life.'},
  
  {mukhi: '20 Mukhi', rulingGod: 'Vishwasu Sadhu & Narayan', rulingPlanet: 'None', beejamantra: 'Hidden'
  , majorbenefit: 'It represents Vishwasu Sadhu Praani. The wearer of this Rudraksha is known for his words. '
  +'he always speak truth and his wordings becomes truth. Lord Shiva opens the power of truth for his words. '
  +'This Rudraksha reaches to the Sadhu, saints and brahmins by the virtue of their devotion for Lord Shiva. '
  +'Lord Shiva bless them with 21 mukhi Rudraksha and removes their sins. It provides Moksha (liberation) in the end.'},
  
  {mukhi: '21 Mukhi', rulingGod: 'Ek Alakh Niranjan that is Omkar', rulingPlanet: 'None', beejamantra: 'Hidden'
  , majorbenefit: 'It is called Ek Alakh King. It is the creator and do preservation of the universe and '
  +'it is the past, present and future itself. This Rudraksha belongs to each and every Shakti (power). '
  +'Lord Brahmma, Vishnu and Mahesha along with all other God and Goddess live in this Rudraksha. '
  +'The wearer of this Rudraksha gets all the comforts, leisure and happiness and in the end get the Moksha ( Blessing).'},
  
  {mukhi: 'Gauri Shankar', rulingGod: 'Shiva & Parvati	', rulingPlanet: 'Moon', beejamantra: 'Om Shree GauriShankaraya Namah'
  , majorbenefit: 'Regarded the best for peace and comfort in the family. If a man worships Gauri Shankar '
  +'at his worshipping place, the pain and suffering and other earthly obstacles are destroyed and the peace and '
  +'pleasure of family are increased.'},
];
@Component({
  selector: 'app-rudraksh',
  templateUrl: './rudraksh.component.html',
  styleUrls: ['./rudraksh.component.css']
})
export class RudrakshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['mukhi', 'rulingGod', 'rulingPlanet', 'beejamantra', 'majorbenefit'];
  dataSource = ELEMENT_DATA;
}
