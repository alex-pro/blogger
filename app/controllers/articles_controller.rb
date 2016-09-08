class ArticlesController < ApplicationController
  expose :articles, -> { Article.all }

  def index
    render json: articles, status: :ok
  end
end
