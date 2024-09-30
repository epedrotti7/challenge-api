import { Register } from '../models/register';
import { RegisterRepository } from '../repositories/register-repository';

export class RegisterService {
  private registerRepository: RegisterRepository;

  constructor() {
    this.registerRepository = new RegisterRepository();
  }

  public register = async (data: Register) => {
    return this.registerRepository.create(data);
  };

  public getByDoc = async (doc: string) => {
    return this.registerRepository.findByDoc(doc);
  };
}
