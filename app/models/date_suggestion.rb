class DateSuggestion < ApplicationRecord
     validates :title, :location, :date_type, :date_number, :description, presence: true, uniqueness: true

     has_many :users,
     foreign_key: :user_id,
     class_name: :User
     
end
