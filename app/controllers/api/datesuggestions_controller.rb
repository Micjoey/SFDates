
class Api::DatesuggestionsController < ApplicationController
    def index
        @date_suggestions = DateSuggestion.all
        # render "api/datesuggestion/"
        render :index
    end

    def show
        @date_suggestion = DateSuggestion.find(params[:id])
        # render "api/date_suggestion/:id"
        render :show
    end

    private

    def date_params
        params.require(:datesuggestion).permit(:id, :user_id)
    end

 
end
