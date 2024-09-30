import Queue from 'bull';
import { RegisterService } from '../services/register-service';
import { Register } from '../models/register';

interface RegisterJobData {
  data: Register;
}

const registerQueue = new Queue<RegisterJobData>('registerQueue', {
  redis: {
    host: 'redis',
    port: 6379,
  },
});

registerQueue.process(async (job) => {
  const registerData = job.data.data;
  console.log('Processing register:', registerData);

  const registerService = new RegisterService();
  await registerService.register(registerData);
});

export { registerQueue };
