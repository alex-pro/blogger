class ArticlesController < ApplicationController
  expose :articles, -> { Article.all }
  expose :article

  def index
    render json: articles, status: :ok
  end

  def update
    return render json: article, status: :accepted if article.update(article_params)
    render json: { errors: article.errors.messages }, status: :unprocessable_entity
  end

  alias create update

  def destroy
    article.destroy
    render json: { message: I18n.t('info.destroy.notice') }, status: :ok
  end

  private

  def article_params
    params.require(:article).permit(:title, :body)
  end
end
