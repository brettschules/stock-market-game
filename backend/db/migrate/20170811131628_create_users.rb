class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :password_digest
      t.float :account_balance
      t.string :image

      t.timestamps
    end
  end
end
