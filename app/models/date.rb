class Date < ApplicationRecord
    validates :title, :location, :type, :date_number, :description, presence: true

end

