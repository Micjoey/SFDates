class DateSuggestion < ApplicationRecord
     validates :title, :location, :date_type, :date_number, :description, presence: true
     validates :title, :description, uniqueness: true

     belongs_to :users,
     foreign_key: :user_id,
     class_name: :User,
     optional: true
     
end
