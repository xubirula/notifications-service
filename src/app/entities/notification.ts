import { Replace } from './../../helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    // this.props = props;
    this.props = {
      ...props,
      createdAt: props.canceledAt ?? new Date(),
    };
  }

  public set recipientId(value: string) {
    this.props.recipientId = value;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(value: Content) {
    // if (value.length < 5) throw new Error('Invalid content');

    this.props.content = value;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(value: string) {
    this.props.category = value;
  }

  public get category(): string {
    return this.props.category;
  }

  public set canceledAt(value: Date | null | undefined) {
    this.props.canceledAt = value;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public set readAt(value: Date | null | undefined) {
    this.props.readAt = value;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
