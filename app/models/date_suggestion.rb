class DateSuggestion < ApplicationRecord
     validates :title, :location, :date_type, :date_number, :description, presence: true
end
