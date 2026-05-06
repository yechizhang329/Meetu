export type AnimalType =
  | 'power_cat'
  | 'warm_dog'
  | 'calm_capybara'
  | 'corner_mouse'
  | 'vibe_monkey'
  | 'prep_hamster'
  | 'border_collie'
  | 'meme_fox'
  | 'show_peacock'
  | 'empathy_otter'
  | 'border_hedgehog'
  | 'recharge_panda'
  | 'night_owl'
  | 'lastminute_pigeon'
  | 'bullet_alpaca'
  | 'social_butterfly';

export type OptionId = 'A' | 'B' | 'C' | 'D';

export interface QuizOption {
  id: OptionId;
  text: string;
  scores: Partial<Record<AnimalType, number>>;
}

export interface QuizQuestion {
  id: string;
  title: string;
  options: QuizOption[];
}

export interface AnimalResult {
  id: AnimalType;
  name: string;
  oneLiner: string;
  mode: string;
  friendView: string;
  friendRoast: string;
  selfRecognition: string;
  vibe: string;
  tips: string[];
  keywords: string[];
  shareText: string;
  themeColor: string;
  accentColor: string;
}

export interface UserAnswer {
  questionId: string;
  optionId: OptionId;
}
