import { Userrating } from '@/domain/model/json-movie.interface';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema({ timestamps: false, _id: false })
export class MovieRating {
  source: string;
  value: number;
}

@Schema({ timestamps: true })
export class Movie {
  @Prop({ unique: true, index: true })
  imdbID: string;

  @Prop({ index: true })
  jsonId: number;

  @Prop({ text: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  year: string;

  @Prop()
  rated: string;

  @Prop({ type: Date })
  released: Date;

  @Prop()
  duration: number;

  @Prop({ text: true })
  genre: string;

  @Prop()
  director: string;

  @Prop({ text: true })
  writers: string[];

  @Prop({ text: true })
  actors: string[];

  @Prop()
  plot: string;

  @Prop()
  languages: string[];

  @Prop()
  originalLanguage: string;

  @Prop()
  studios: string[];

  @Prop()
  country: string;

  @Prop()
  awards: string;

  @Prop()
  poster: string;

  @Prop({ type: [MovieRating], ref: 'MovieRating', default: [] })
  ratings: MovieRating[];

  @Prop()
  metaScore: number;

  @Prop()
  imdbRating: number;

  @Prop()
  imdbVotes: number;

  @Prop(
    raw({
      countStar1: Number,
      countStar2: Number,
      countStar3: Number,
      countStar4: Number,
      countStar5: Number,
      countTotal: Number,
    }),
  )
  userRating: Userrating | null;

  @Prop()
  type: string;

  @Prop()
  DVD: string;

  @Prop()
  boxOffice: string;

  @Prop()
  production: string;

  @Prop()
  website: string;
}

export const MovieRatingSchema = SchemaFactory.createForClass(MovieRating);
export const MovieSchema = SchemaFactory.createForClass(Movie);
