class User < ApplicationRecord
  has_secure_password
  has_many :reports, dependent: :destroy
  has_many :report_transactions, dependent: :destroy

  validates_presence_of :email, :first_name, :last_name
  validates_uniqueness_of :email
end
