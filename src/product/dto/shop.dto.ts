import { IsString } from "class-validator";
import { IsNotEmpty, IsNumber, IsOptional, MinLength } from "class-validator/types/decorator/decorators";

export class ShopDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    price: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(15)
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    slug: string;

    @IsNumber()
    @IsOptional()
    stock: number;

    @IsString()
    @IsOptional()
    gender: string;


}