class DateSuggestion < ApplicationRecord
     validates :title, :location, :date_type, :date_number, :description, presence: true
     validates :title, :description, uniqueness: true
     # validates :users, uniqueness: { scope: :user_id}


     belongs_to :users,
     foreign_key: :user_id,
     class_name: :User,
     optional: true

     

     def total_count()
          total_count = DateSuggestion.last.id
     end

     def unique_date_type() 
          DateSuggestion
               .select(:date_type)
               .distinct
               .map{|date| date.date_type}
               .sort()
     end

     def unique_date_location() 
          DateSuggestion
               .select(:location)
               .distinct
               .map{|date| date.location}
               .sort()
     end
     
end
