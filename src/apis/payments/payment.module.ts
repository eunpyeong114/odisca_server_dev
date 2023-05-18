import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentsService } from './payment.service';
import { PaymentsResolver } from './payment.resolver';
import { User } from '../users/entities/user.entity';
import { VisitService } from '../visit/visit.service';
import { Visit } from '../visit/entities/visit.entity';
import { Seat } from '../seats/entities/seat.entity';
import { StudyCafe } from '../studyCafes/entities/studyCafe.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Payment, //
      User, //
      Visit, //
      StudyCafe, //
    ]),
  ],
  providers: [
    PaymentsResolver, //
    PaymentsService, //
    VisitService, //
  ],
})
export class PaymentsModule {}