import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Otp } from './otp.entity';
import * as crypto from 'crypto';

@Injectable()
export class OtpService {
  constructor(
    @InjectModel(Otp.name) private readonly otpModel: Model<Otp>,
  ) {}

  async generateAndSendOtp(phone: string): Promise<string> {
    const code = crypto.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await this.otpModel.create({ phone, code, expiresAt });

    console.log(`OTP pour ${phone} : ${code}`);
    return code;
  }

  async verifyOtp(phone: string, otp: string): Promise<boolean> {
    const record = await this.otpModel.findOne({ phone, code: otp });

    if (!record) return false;
    if (record.expiresAt.getTime() < Date.now()) return false;

    await this.otpModel.deleteOne({ _id: record._id });
    return true;
  }
}
