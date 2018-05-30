class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all.includes(:items)
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end
end
