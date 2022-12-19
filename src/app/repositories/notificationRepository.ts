// Repositório: contrato/interface que informa quais metódos devem existir, mas sem implementar
// Classe abstrata

import { Notification } from '../entities/notifications';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
