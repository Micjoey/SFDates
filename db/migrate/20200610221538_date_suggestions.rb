class DateSuggestions < ActiveRecord::Migration[5.2]
  def change
    add_column :date_suggestions, :approximate_date_length, :string
  end
end
