import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class ApiToken extends BaseModel {
  @column({
    isPrimary: true
  })
  public id: number

  @column()
  public user_id: number

  @column()
  public name: string

  @column()
  public type: string

  @column()
  public token: string

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => value.toFormat('dd-MM-yyyy HH:mm:ss')
  })
  public expiresAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => value.toFormat('dd-MM-yyyy HH:mm:ss')
  })
  public createdAt: DateTime

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>
}
