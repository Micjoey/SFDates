
class Api::DatesuggestionsController < ApplicationController
    def index
        @date_suggestions = DateSuggestion.all
        # render "api/datesuggestion/"
        render :index
    end

    def show
        @date_suggestion = DateSuggestion.find(params[:id])
        # render "api/datesuggestion/:id"
        render :show
    end

    private

    def date_params
        params.require(:datesuggestion).permit(:id, :location, :date_type, :cost, :date_number)
    end

 
end
