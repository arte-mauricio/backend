import { TypeOrmModule} from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ProductSchema } from "./schemas/ProductSchema";
import { CategorySchema } from "./schemas/CategorySchema";
import { ProductImageSchema } from "./schemas/ProductImageSchema";
import { ProductCategorySchema } from "./schemas/ProductCategorySchema";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // url: process.env.DB_URL,
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [ProductSchema, CategorySchema,ProductImageSchema, ProductCategorySchema],
      autoLoadEntities:true,
    }),
  ],
})
export class DatabaseModule{}