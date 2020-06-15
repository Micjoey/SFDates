class DateSuggestion < ApplicationRecord
     validates :title, :location, :date_type, :date_number, :description, presence: true
     validates :title, :description, uniqueness: true

     belongs_to :users,
     foreign_key: :user_id,
     class_name: :User,
     optional: true

     

     def total_count()
          total_count = DateSuggestion.last.id
     end

     # def unique_date_numbers() 
     #      date_numbers_array_object = DateSuggestion.select(:date_number).distinct.map{ |uniq_num| uniq_num.date_number}
     # end

     # def unique_date_type() 
     #      DateSuggestion.select(:date_type).distinct
     # end

     # def unique_date_location() 
     #      DateSuggestion.select(:location).distinct
     # end

     # def unique_date_cost() 
     #      DateSuggestion.select(:cost).distinct
     # end
     
end
